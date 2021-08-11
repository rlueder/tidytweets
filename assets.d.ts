declare module "*.svg" {
  const image: HTMLImageElement;
  export default image.href;
}
