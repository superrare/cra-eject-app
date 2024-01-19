type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

declare module '*.mov' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}
