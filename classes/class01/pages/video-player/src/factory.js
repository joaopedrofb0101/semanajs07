import Camera from "../../../lib/shared/camera.js"
import { supportsWorkerType } from "../../../lib/shared/util.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

if(supportsWorkerType) {
  console.log('suporta!')
}
else {
  console.log('nao suporta!')
}

const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View({}),
      service: new Service({}) 
    })
 }
}

export default factory