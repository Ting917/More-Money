declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// SVG
declare module "*.svg" {
  const content: string;
  export default content;
}