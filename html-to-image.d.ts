declare module 'html-to-image' {
  export interface ToPngOptions {
    quality?: number
    pixelRatio?: number
    backgroundColor?: string
    width?: number
    height?: number
    style?: React.CSSProperties
    filter?: (node: HTMLElement) => boolean
    skipAutoScale?: boolean
    cacheBust?: boolean
    imagePlaceholder?: string
    pixelRatio?: number
  }

  export interface ToSvgOptions {
    backgroundColor?: string
    width?: number
    height?: number
    style?: React.CSSProperties
    filter?: (node: HTMLElement) => boolean
    skipAutoScale?: boolean
    cacheBust?: boolean
    imagePlaceholder?: string
  }

  export interface ToBlobOptions {
    backgroundColor?: string
    width?: number
    height?: number
    style?: React.CSSProperties
    filter?: (node: HTMLElement) => boolean
    skipAutoScale?: boolean
    cacheBust?: boolean
    imagePlaceholder?: string
    quality?: number
  }

  export const toPng: (
    node: HTMLElement,
    options?: ToPngOptions
  ) => Promise<string>
  export const toSvg: (
    node: HTMLElement,
    options?: ToSvgOptions
  ) => Promise<string>
  export const toBlob: (
    node: HTMLElement,
    options?: ToBlobOptions
  ) => Promise<Blob>
  export const toPixelData: (
    node: HTMLElement,
    options?: ToPngOptions
  ) => Promise<Uint8ClampedArray>

  const htmlToImage: {
    toPng: (node: HTMLElement, options?: ToPngOptions) => Promise<string>
    toSvg: (node: HTMLElement, options?: ToSvgOptions) => Promise<string>
    toBlob: (node: HTMLElement, options?: ToBlobOptions) => Promise<Blob>
    toPixelData: (
      node: HTMLElement,
      options?: ToPngOptions
    ) => Promise<Uint8ClampedArray>
  }
  export default htmlToImage
}
