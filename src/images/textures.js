import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg
} from './images';

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const dirt = new TextureLoader().load(dirtImg);
const glass = new TextureLoader().load(glassImg);
const grass = new TextureLoader().load(grassImg);
const log = new TextureLoader().load(logImg);
const wood = new TextureLoader().load(woodImg);

const ground = new TextureLoader().load(grassImg);

ground.wrapS = RepeatWrapping;
ground.wrapT = RepeatWrapping;
ground.magFilter = NearestFilter;

dirt.magFilter = NearestFilter;
glass.magFilter = NearestFilter;
grass.magFilter = NearestFilter;
log.magFilter = NearestFilter;
wood.magFilter = NearestFilter;

export {
  ground,
  grass,
  dirt,
  log,
  glass,
  wood
}
