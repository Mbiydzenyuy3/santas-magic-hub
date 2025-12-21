// Background removal utilities

export interface RemoveColorOptions {
  removeColor: string;
  edgeThreshold: number;
  tolerance: number;
}

/**
 * Remove background by color similarity (chroma key effect)
 */
export function removeBackgroundByColor(
  imageData: ImageData,
  options: RemoveColorOptions
): ImageData {
  const { removeColor, tolerance = 30 } = options;

  // Parse the remove color
  const targetColor = hexToRgb(removeColor);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Calculate color distance
    const colorDistance = Math.sqrt(
      Math.pow(r - targetColor.r, 2) +
        Math.pow(g - targetColor.g, 2) +
        Math.pow(b - targetColor.b, 2)
    );

    // If color is similar to target, make it transparent
    if (colorDistance < tolerance) {
      // Keep some alpha for edge blending
      const alpha = Math.max(0, 255 - (tolerance - colorDistance) * 8);
      data[i + 3] = alpha;
    }
  }

  return imageData;
}

/**
 * Remove background using edge detection
 */
export function removeBackgroundByEdges(
  imageData: ImageData,
  edgeThreshold: number
): ImageData {
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;

  // Simple edge detection using Laplacian filter
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;

      // Calculate gradient magnitude
      const gx = getGradientX(data, x, y, width);
      const gy = getGradientY(data, x, y, width);
      const magnitude = Math.sqrt(gx * gx + gy * gy);

      // If edge magnitude is below threshold, it's likely background
      if (magnitude < edgeThreshold) {
        // Check if this pixel is surrounded by similar colors (likely background)
        if (isBackgroundPixel(data, x, y, width, height, edgeThreshold)) {
          data[idx + 3] = 0; // Make transparent
        }
      }
    }
  }

  return imageData;
}

/**
 * Hybrid approach combining color and edge detection
 */
export function removeBackgroundHybrid(
  imageData: ImageData,
  options: RemoveColorOptions
): ImageData {
  // First apply color-based removal
  let result = removeBackgroundByColor(imageData, options);

  // Then refine with edge detection
  result = removeBackgroundByEdges(result, options.edgeThreshold);

  return result;
}

/**
 * Convert hex color to RGB object
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : { r: 255, g: 255, b: 255 };
}

/**
 * Calculate gradient in X direction
 */
function getGradientX(
  data: Uint8ClampedArray,
  x: number,
  y: number,
  width: number
): number {
  const left = (y * width + (x - 1)) * 4;
  const right = (y * width + (x + 1)) * 4;

  const leftGray = (data[left] + data[left + 1] + data[left + 2]) / 3;
  const rightGray = (data[right] + data[right + 1] + data[right + 2]) / 3;

  return rightGray - leftGray;
}

/**
 * Calculate gradient in Y direction
 */
function getGradientY(
  data: Uint8ClampedArray,
  x: number,
  y: number,
  width: number
): number {
  const top = ((y - 1) * width + x) * 4;
  const bottom = ((y + 1) * width + x) * 4;

  const topGray = (data[top] + data[top + 1] + data[top + 2]) / 3;
  const bottomGray = (data[bottom] + data[bottom + 1] + data[bottom + 2]) / 3;

  return bottomGray - topGray;
}

/**
 * Check if a pixel is likely background based on surrounding pixels
 */
function isBackgroundPixel(
  data: Uint8ClampedArray,
  x: number,
  y: number,
  height: number,
  width: number,
  threshold: number
): boolean {
  const currentIdx = (y * width + x) * 4;
  const currentGray =
    (data[currentIdx] + data[currentIdx + 1] + data[currentIdx + 2]) / 3;

  // Check surrounding pixels
  let similarCount = 0;
  const totalChecks = 8;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;

      const checkX = x + dx;
      const checkY = y + dy;

      if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
        const checkIdx = (checkY * width + checkX) * 4;
        const checkGray =
          (data[checkIdx] + data[checkIdx + 1] + data[checkIdx + 2]) / 3;

        if (Math.abs(currentGray - checkGray) < threshold) {
          similarCount++;
        }
      }
    }
  }

  // If most surrounding pixels are similar, likely background
  return similarCount >= totalChecks * 0.7;
}

/**
 * Create a checkerboard pattern background for transparent images
 */
export function createCheckerboardBackground(
  width: number,
  height: number
): ImageData {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get canvas 2D context");
  }
  const tileSize = 20;
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      const isDark = (x / tileSize + y / tileSize) % 2 === 0;
      ctx.fillStyle = isDark ? "#f0f0f0" : "#ffffff";
      ctx.fillRect(x, y, tileSize, tileSize);
    }
  }
  return ctx.getImageData(0, 0, width, height);
}
