import img1 from './images/bright.jpg';
import img2 from './images/diffuse.jpg';
import img3 from './images/rains.jpg';
import img4 from './images/snow.jpg';
import video1 from './images/fire.mp4';
import video2 from './images/rains-s.mp4';

const mixBlendModeEnum = new Map([
  ['normal', '正常'],
  ['multiply', '正片叠底'],
  ['screen', '滤色'],
  ['overlay', '叠加'],
  ['darken', '变暗'],
  ['lighten', '变亮'],
  ['color-dodge', '颜色减淡'],
  ['color-burn', '颜色加深'],
  ['hard-light', '强光'],
  ['soft-light', '柔光'],
  ['difference', '差值'],
  ['exclusion', '排除'],
  ['hue', '色相'],
  ['saturation', '饱和度'],
  ['color', '颜色'],
  ['luminosity', '亮度'],
  ['initial', '初始'],
  ['inherit', '继承'],
  ['unset', '复原'],
]);

const picAndTextList = [{
  type: 'img',
  url: img1
}, {
  type: 'img',
  url: img2
}, {
  type: 'img',
  url: img3
}, {
  type: 'img',
  url: img4
}, {
  type: 'video',
  url: video1
}, {
  type: 'video',
  url: video2
}, {
  type: 'text',
  text: '文字特效',
}];

export {
  mixBlendModeEnum,
  picAndTextList
};