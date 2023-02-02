declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.svg" {
  const path: string;
  export default path;
}

export type Service = {
  title: string;
  image: string;
  description: string;
};

export type Work = {
  clientName: string;
  webScreenshot: string;
  mobileScreenshot: string;
};

export type Testimonial = {
  client: string;
  testimonial: string;
};
