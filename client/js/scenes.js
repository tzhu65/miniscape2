class Scenes {

  constructor() {
    this.currentScene = {};
    this.scenes = {};
  }

  addScene(name, scene) {
    this.scenes[name] = scene;
  }

  setScene(name) {
    this.currentScene = this.scenes[name];
  }

}

var instance = new Scenes();
Object.freeze(instance);

module.exports = instance;
