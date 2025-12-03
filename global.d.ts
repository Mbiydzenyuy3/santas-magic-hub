declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare const styles: Record<string, never>
export default styles
