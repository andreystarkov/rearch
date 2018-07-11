import React, { PureComponent } from 'react'
import anime from 'animejs'

import { random } from 'Utils'

export default class EpicWinIcon extends PureComponent {
  componentDidMount () {
    anime({
      targets: '#epic-win path',
      opacity: [0, 1],
      // scale: [0, 1],
      elasticity: 700,
      // rotateX: [30, 0],
      // rotateY: [-15, 0],
      // rotateZ: [15, 0],
      translateX: (e, i) => [ random(-50, 50), 0 ],
      translateY: (e, i) => [ random(-120, -70), 0 ],
      fillOpacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 400,
      delay: (e, i) => i * 18
    })
  }
  render () {
    return (
      <svg id='epic-win' xmlnsXlink='http://www.w3.org/1999/xlink' width='474.074' height='225.9'>
        <defs>
          <path id='a' d='M783.1 270.3l-34.2-14v-32.5l66.5-8.2 35.2-4.9v32.4z'/>
          <path id='c' d='M748.9 227.5v1.6l34.2 14 67.5-27.2v-1.6l-67.5 27.2z'/>
          <path id='d' d='M748.9 232.4v1.6l34.2 13.9 67.5-27.2v-1.5l-67.5 27.1z'/>
          <path id='e' d='M748.9 237.2v1.6l34.2 14 67.5-27.2V224l-67.5 27.2z'/>
          <path id='f' d='M748.9 241.7v1.6l34.2 14 67.5-27.2v-1.6l-67.5 27.2z'/>
          <path id='g' d='M748.9 246.6v1.6l34.2 14 67.5-27.2v-1.6l-67.5 27.2z'/>
          <path id='h' d='M748.9 251.5v1.5l34.2 14 67.5-27.2v-1.5l-67.5 27.1z'/>
          <path id='i' d='M783.1 237.6l-34.2-13.9 66.5-26.9 35.2 13.7z'/>
          <path id='k' d='M827.1 252.6l-15.7 6.2v-32.6l15.7-6.2z'/>
          <path id='m' d='M782.9 216.9c0-4.14 8.1-7.5 18.1-7.5 10 0 18.1 3.36 18.1 7.5 0 4.14-8.1 7.5-18.1 7.5-10 0-18.1-3.36-18.1-7.5z'/>
          <path id='n' d='M818.2 207.6c0-.88 1.75-1.6 3.9-1.6s3.9.72 3.9 1.6c0 .88-1.75 1.6-3.9 1.6s-3.9-.72-3.9-1.6z'/>
          <path id='o' d='M811.6 226.3l-34.2-14 14.6-5.9 35.1 13.6z'/>
          <path id='u' d='M618.1 263.2c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='w' d='M618 263.5v-8.3h63.4v8.3z'/>
          <path id='y' d='M618.1 255.2c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='A' d='M625.8 255.2c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='C' d='M628.3 255.9c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.8-15.4-9z'/>
          <path id='E' d='M621.3 252.7c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='G' d='M621.3 253v-8.3h63.4v8.3z'/>
          <path id='I' d='M621.3 244.7c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='K' d='M629 244.7c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='L' d='M631.6 245.4c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.3-15.4-4.9-15.4-9z'/>
          <path id='N' d='M616.8 241.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='P' d='M616.7 241.9v-8.3h63.4v8.3z'/>
          <path id='R' d='M616.8 233.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='T' d='M624.5 233.6c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='V' d='M627 234.2c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.2-15.4-4.8-15.4-9z'/>
          <path id='W' d='M623.4 231.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='Y' d='M623.4 231.9v-8.3h63.4v8.3z'/>
          <path id='aa' d='M623.4 223.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='ac' d='M631.1 223.6c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='ae' d='M633.6 224.3c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.8-15.4-9z'/>
          <path id='ag' d='M619.5 221c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='ai' d='M619.5 221.3V213h63.4v8.3z'/>
          <path id='ak' d='M619.5 213c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='am' d='M627.2 212.6c0-5.74 10.75-10.4 24-10.4s24 4.66 24 10.4-10.75 10.4-24 10.4-24-4.66-24-10.4z'/>
          <path id='ao' d='M629.8 213.7c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.3-15.4-4.8-15.4-9z'/>
          <path id='ap' d='M691.9 278.6l-35.2-14.2c-1.7-.7-3.8-.7-5.5 0l-67.8 27.3c-1.7.7-2.5 1.8-3.1 3.2-.5 1.5-2.2 14.4-2.2 14.4l37.4 16.5z'/>
          <path id='ar' d='M618.7 303.7l-26.9-10.9-.5-.5 61.9-25 28.3 11.1z'/>
          <path id='at' d='M593.6 293.5l59.6-24.1 25.6 10.1 2.7-1.1-28.3-11.1-61.9 25 .5.5z'/>
          <path id='au' d='M615.5 325.9s1.7-13.3 1.9-15c.2-1.7.9-2.7 2.6-3.4l69.9-28.7c1.2-.5 2.6-.1 3.1.8l4.1 13.5z'/>
          <path id='aw' d='M739.7 281.1c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='ay' d='M739.7 281.4v-8.3h63.4v8.3z'/>
          <path id='aA' d='M739.7 273.1c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='aC' d='M747.4 273.1c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='aE' d='M750 273.7c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.2-15.4-4.8-15.4-9z'/>
          <path id='aG' d='M739.5 270.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='aI' d='M739.5 270.8v-8.3h63.4v8.3z'/>
          <path id='aK' d='M739.5 262.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='aM' d='M747.2 262.6c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='aO' d='M749.8 263.2c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.3-15.4-4.8-15.4-9z'/>
          <path id='aQ' d='M737.4 260.3c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='aS' d='M737.4 260.6v-8.3h63.4v8.3z'/>
          <path id='aU' d='M737.4 252.3c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='aW' d='M745.1 252.3c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='aY' d='M747.7 253c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.8-15.4-9z'/>
          <path id='ba' d='M738.6 249.5c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bc' d='M738.6 249.8v-8.3H802v8.3z'/>
          <path id='be' d='M738.6 241.5c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bg' d='M746.3 241.5c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='bi' d='M748.8 242.1c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.2-15.4-4.8-15.4-9z'/>
          <path id='bk' d='M740 239.4c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bm' d='M740 239.7v-8.3h63.4v8.3z'/>
          <path id='bo' d='M740 231.4c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bq' d='M747.7 231.4c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='bs' d='M750.2 232.1c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.9-15.4-9z'/>
          <path id='bu' d='M743.3 228.9c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bw' d='M743.2 229.1v-8.3h63.4v8.3z'/>
          <path id='by' d='M743.3 220.9c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bA' d='M751 220.9c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='bC' d='M753.5 221.5c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.8-15.4-9z'/>
          <path id='bE' d='M737.7 218.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bG' d='M737.7 218.9v-8.3h63.4v8.3z'/>
          <path id='bI' d='M737.7 210.6c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bK' d='M745.4 210.6c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='bM' d='M748 211.3c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.3-15.4-4.8-15.4-9z'/>
          <path id='bO' d='M738.8 207.8c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bQ' d='M738.8 208.1v-8.3h63.4v8.3z'/>
          <path id='bS' d='M738.8 199.8c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='bU' d='M746.5 199.8c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='bW' d='M749.1 200.4c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.2-15.4-4.8-15.4-9z'/>
          <path id='bY' d='M741.4 197.2c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='ca' d='M741.4 197.5v-8.3h63.4v8.3z'/>
          <path id='cc' d='M741.4 189.2c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='ce' d='M749.1 189.2c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='cg' d='M751.7 189.8c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.2-15.4-4.8-15.4-9z'/>
          <path id='ch' d='M727 310.8l36.6-3.3-12.7-34.2z'/>
          <path id='cj' d='M727 310.8l-15.9-30 5.9-10.3 33.9 2.8z'/>
          <path id='cl' d='M750.9 273.3l1.7-31.6 11 65.8z'/>
          <path id='cn' d='M699.2 324.7l27.8-13.9 36.6-3.3z'/>
          <path id='cs' d='M689 291l10.2 33.7 27.8-13.9-15.9-30z'/>
          <path id='cu' d='M677.4 310.5l21.8 14.2L689 291l-4-2.2z'/>
          <path id='cw' d='M685 288.8l.8-24.6-7.3 15.6-1.1 30.7z'/>
          <path id='cz' d='M627 306.1c-5.5 0-8.1 2.6-8.1 8.1 0-5.5-2.6-8.1-8.1-8.1 5.5 0 8.1-2.6 8.1-8.1 0 5.5 2.6 8.1 8.1 8.1z'/>
          <path id='cA' d='M545.2 271.8c0-6.52 12.63-11.8 28.2-11.8 15.57 0 28.2 5.28 28.2 11.8 0 6.52-12.63 11.8-28.2 11.8-15.57 0-28.2-5.28-28.2-11.8z'/>
          <path id='cC' d='M545.1 272v-7.4h56.5v7.4z'/>
          <path id='cE' d='M545.2 264.7c0-6.52 12.63-11.8 28.2-11.8 15.57 0 28.2 5.28 28.2 11.8 0 6.52-12.63 11.8-28.2 11.8-15.57 0-28.2-5.28-28.2-11.8z'/>
          <path id='cG' d='M552 264.7c0-4.92 9.58-8.9 21.4-8.9 11.82 0 21.4 3.98 21.4 8.9s-9.58 8.9-21.4 8.9c-11.82 0-21.4-3.98-21.4-8.9z'/>
          <path id='cI' d='M554.3 265.2c0-4.7 9.2-8.5 20.5-8.5 8.9 0 16.6 2.4 19.3 5.7-2.4-3.8-10.8-6.7-20.7-6.7-11.8 0-21.4 4-21.4 8.9 0 4.2 6.8 7.6 16.1 8.6-8.1-1.1-13.8-4.2-13.8-8z'/>
          <path id='cJ' d='M823.2 287.5c0-6.52 12.63-11.8 28.2-11.8 15.57 0 28.2 5.28 28.2 11.8 0 6.52-12.63 11.8-28.2 11.8-15.57 0-28.2-5.28-28.2-11.8z'/>
          <path id='cL' d='M823.1 287.8v-7.4h56.5v7.4z'/>
          <path id='cN' d='M823.2 280.4c0-6.52 12.63-11.8 28.2-11.8 15.57 0 28.2 5.28 28.2 11.8 0 6.52-12.63 11.8-28.2 11.8-15.57 0-28.2-5.28-28.2-11.8z'/>
          <path id='cP' d='M830 280.4c0-4.92 9.58-8.9 21.4-8.9 11.82 0 21.4 3.98 21.4 8.9s-9.58 8.9-21.4 8.9c-11.82 0-21.4-3.98-21.4-8.9z'/>
          <path id='cR' d='M832.3 281c0-4.7 9.2-8.5 20.5-8.5 8.9 0 16.6 2.4 19.3 5.7-2.4-3.8-10.8-6.7-20.7-6.7-11.8 0-21.4 4-21.4 8.9 0 4.2 6.8 7.6 16.1 8.6-8.1-1.1-13.8-4.3-13.8-8z'/>
          <path id='cS' d='M789.6 304.5c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='cU' d='M789.6 304.7v-8.3H853v8.3z'/>
          <path id='cW' d='M789.6 296.5c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='cY' d='M797.3 296.5c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='da' d='M799.8 297.1c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-8.9-1.3-15.4-4.8-15.4-9z'/>
          <path id='dc' d='M792.2 293.8c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='de' d='M792.2 294.1v-8.3h63.4v8.3z'/>
          <path id='dg' d='M792.2 285.8c0-7.29 14.2-13.2 31.7-13.2s31.7 5.91 31.7 13.2c0 7.29-14.2 13.2-31.7 13.2s-31.7-5.91-31.7-13.2z'/>
          <path id='di' d='M799.9 285.8c0-5.52 10.75-10 24-10s24 4.48 24 10-10.75 10-24 10-24-4.48-24-10z'/>
          <path id='dk' d='M802.5 286.5c0-5.3 10.3-9.6 23-9.6 10 0 18.6 2.7 21.7 6.4-2.7-4.3-12.1-7.5-23.3-7.5-13.3 0-24 4.5-24 10 0 4.7 7.7 8.6 18 9.7-9-1.3-15.4-4.8-15.4-9z'/>
          <path id='dl' d='M810.2 276.3c-4.9 0-7.1 2.3-7.1 7.1 0-4.9-2.3-7.1-7.1-7.1 4.9 0 7.1-2.3 7.1-7.1-.1 4.8 2.2 7.1 7.1 7.1z'/>
          <path id='dm' d='M669.5 149c-4.9 0-7.1 2.3-7.1 7.1 0-4.9-2.3-7.1-7.1-7.1 4.9 0 7.1-2.3 7.1-7.1 0 4.9 2.3 7.1 7.1 7.1z'/>
          <path id='dn' d='M804.9 181c-4.9 0-7.1 2.3-7.1 7.1 0-4.9-2.3-7.1-7.1-7.1 4.9 0 7.1-2.3 7.1-7.1-.1 4.9 2.2 7.1 7.1 7.1z'/>
          <path id='do' d='M1058.6 331.2s133.5 77.3 167 221.1c-46.9-123.7-142.8-183.7-177.3-203z'/>
          <path id='dq' d='M1067.3 316.4s124.8 90 158.3 233.8c-35.8-122.8-134.1-196.4-168.6-215.7z'/>
          <path id='ds' d='M1048.2 349.4l18.9-9.3v-24.6l-19.5 6.3z'/>
          <path id='dt' d='M1018.7 277.5l17.8 16.9 24-5-10.6 22.1 10.3 18-3 4.7-19.5-4.7-16.5 18.2-4.3-24.1-19-6.4 1.1-6.2 17.1-9.1z'/>
          <path id='du' d='M1019.2 285.6l15.6 14.9 21.1-4.4-9.4 19.4 10.7 18.7-21.3-2.9-14.5 16-3.9-21.2-19.6-8.9 19-10.2z'/>
          <path id='dw' d='M1154.7 306.6s81.8 76 82.4 182.9c-13.3-94.9-71.4-152.5-92.6-171.7z'/>
          <path id='dy' d='M1163.2 297.5s73.7 83.5 74.3 190.4c-5.6-92.4-63.2-160.1-84.5-179.3z'/>
          <path id='dA' d='M1144.5 317.7l14.8-3.5 4-17.4-14.9 1.7z'/>
          <path id='dB' d='M1135.2 262.2l9.8 14.8 17.8.3-11.1 13.9 4.4 14.4-2.8 2.8-13-6.4-14.6 10.2.8-17.7-12.4-7.5 1.8-4.2 13.5-3.8z'/>
          <path id='dC' d='M1134.2 268.1l8.6 13 15.6.2-9.7 12.2 4.6 14.9-14.6-5.4-12.8 8.9.7-15.5-12.5-9.4 15.1-4.2z'/>
          <path id='dE' d='M379.9 331.2s-133.5 77.3-167 221.1c46.9-123.7 142.8-183.7 177.3-203z'/>
          <path id='dG' d='M371.2 316.4s-124.8 90-158.3 233.8C248.7 427.4 347 353.8 381.5 334.5z'/>
          <path id='dI' d='M390.3 349.4l-18.9-9.3v-24.6l19.5 6.6z'/>
          <path id='dJ' d='M419.8 277.5L402 294.4l-24-5 10.6 22.1-10.3 18 3 4.7 19.5-4.7 16.5 18.2 4.3-24.1 19-6.4-1.1-6.2-17.1-9.1z'/>
          <path id='dK' d='M419.3 285.6l-15.6 14.9-21.1-4.4 9.4 19.4-10.7 18.7 21.3-2.9 14.5 16 3.9-21.2 19.6-8.9-19-10.2z'/>
          <path id='dM' d='M283.8 306.6s-81.8 76-82.4 182.9c13.2-95 71.3-152.6 92.6-171.8z'/>
          <path id='dO' d='M275.3 297.5S201.6 381 201 487.9c5.6-92.4 63.2-160.1 84.5-179.3z'/>
          <path id='dQ' d='M294 317.7l-14.8-3.5-4-17.4 14.3 1.5z'/>
          <path id='dR' d='M303.3 262.2l-9.8 14.8-17.8.3 11.1 13.9-4.4 14.4 2.8 2.8 13-6.4 14.6 10.2-.8-17.7 12.4-7.5-1.8-4.2-13.5-3.8z'/>
          <path id='dS' d='M304.3 268.1l-8.7 13-15.5.2 9.7 12.2-4.6 14.9 14.6-5.4 12.8 8.9-.7-15.5 12.5-9.4-15.1-4.2z'/>
          <path id='dU' d='M1073.6 461.7s99.2 51.3 128.3 154.2c-38.2-87.9-109.6-127.9-135.2-140.7z'/>
          <path id='dW' d='M1079.3 450.7s93.3 60.8 122.5 163.7c-30.1-87.6-103.7-137.4-129.3-150.2z'/>
          <path id='dY' d='M1066.7 475.2l13.3-7.3-.8-17.9-13.9 5.5z'/>
          <path id='dZ' d='M1042.9 424.2l13.4 11.7 17.2-4.5-6.9 16.4 8 12.6-1.9 3.5-14.3-2.7-11.3 13.7-4-17.3-13.9-3.9.6-4.5 12-7.3z'/>
          <path id='ea' d='M1043.5 430.1l11.8 10.2 15.1-3.9-6.1 14.4 8.4 13.1-15.6-1.3-9.9 12-3.5-15.2-14.5-5.7 13.4-8.1z'/>
          <path id='ec' d='M363 461.7S263.8 513 234.7 615.9C272.8 528 344.2 488 369.8 475.2z'/>
          <path id='ee' d='M357.2 450.7s-93.3 60.8-122.5 163.7c30.1-87.6 103.8-137.4 129.4-150.2z'/>
          <path id='eg' d='M369.8 475.2l-13.3-7.3.9-17.9 13.4 4.8z'/>
          <path id='eh' d='M393.6 424.2l-13.4 11.7-17.2-4.5 7 16.4-8.1 12.6 2 3.5 14.2-2.7 11.3 13.7 4-17.3 13.9-3.9-.6-4.5-12-7.3z'/>
          <path id='ei' d='M393 430.1l-11.8 10.2-15.1-3.9 6.1 14.4-8.3 13.1 15.5-1.3 9.9 12 3.5-15.2 14.5-5.7-13.3-8.1z'/>
          <linearGradient id='b' x1='834.73' x2='795.23' y1='191.7' y2='238.87' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00e0b5'/>
            <stop offset='1' stopColor='#00d5df'/>
          </linearGradient>
          <linearGradient id='j' x1='736.33' x2='846.1' y1='160.84' y2='258.16' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00e0b5'/>
            <stop offset='1' stopColor='#00d5df'/>
          </linearGradient>
          <linearGradient id='l' x1='819.26' x2='819.26' y1='219.22' y2='263.03' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ebeaf5'/>
            <stop offset='1' stopColor='#beb9de'/>
          </linearGradient>
          <linearGradient id='p' x1='777.39' x2='827.13' y1='216.32' y2='216.32' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ebeaf5'/>
            <stop offset='1' stopColor='#beb9de'/>
          </linearGradient>
          <linearGradient id='q' x1='687.81' x2='763.81' y1='153.83' y2='278.16' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00e0b5'/>
            <stop offset='1' stopColor='#00d5df'/>
          </linearGradient>
          <linearGradient id='r' x1='649.37' x2='761.73' y1='85.16' y2='184.77' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00e0b5'/>
            <stop offset='1' stopColor='#00d5df'/>
          </linearGradient>
          <linearGradient id='s' x1='723.28' x2='760.53' y1='143.36' y2='310.36' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ebeaf5'/>
            <stop offset='1' stopColor='#beb9de'/>
          </linearGradient>
          <linearGradient id='t' x1='691.39' x2='742.31' y1='141.94' y2='141.94' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ebeaf5'/>
            <stop offset='1' stopColor='#beb9de'/>
          </linearGradient>
          <linearGradient id='v' x1='649.26' x2='651.49' y1='268.7' y2='244.19' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='x' x1='648.74' x2='651.6' y1='270.43' y2='239.04' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='z' x1='649.89' x2='649.62' y1='233.54' y2='277.34' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='B' x1='636.1' x2='681.69' y1='237.76' y2='296.13' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='D' x1='648.42' x2='600.15' y1='254.02' y2='209.95' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='F' x1='652.54' x2='654.77' y1='258.17' y2='233.65' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='H' x1='652.02' x2='654.88' y1='259.89' y2='228.51' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='J' x1='653.03' x2='653.03' y1='211.15' y2='257.39' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='M' x1='650.23' x2='627.24' y1='244' y2='238.19' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='O' x1='647.96' x2='650.19' y1='247.03' y2='222.52' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='Q' x1='647.44' x2='650.31' y1='248.76' y2='217.37' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='S' x1='648.46' x2='648.46' y1='200.02' y2='246.26' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='U' x1='634.8' x2='680.39' y1='216.09' y2='274.46' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='X' x1='654.57' x2='656.81' y1='237.1' y2='212.59' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='Z' x1='654.06' x2='656.92' y1='238.82' y2='207.44' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ab' x1='656.07' x2='654.76' y1='194.94' y2='232.66' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ad' x1='641.41' x2='687' y1='206.15' y2='264.53' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='af' x1='653.73' x2='605.47' y1='222.42' y2='178.35' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='ah' x1='650.71' x2='652.95' y1='226.49' y2='201.98' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aj' x1='650.2' x2='653.06' y1='228.22' y2='196.83' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='al' x1='691.73' x2='589.93' y1='217.96' y2='205.59' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='an' x1='692.04' x2='503.04' y1='224.01' y2='171.26' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aq' x1='578.16' x2='691.95' y1='294.87' y2='294.87' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='as' x1='695.75' x2='573.25' y1='257.01' y2='315.51' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='av' x1='615.51' x2='697.13' y1='302.18' y2='302.18' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ax' x1='770.95' x2='773.18' y1='286.55' y2='262.03' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='az' x1='770.43' x2='773.29' y1='288.27' y2='256.89' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aB' x1='771.58' x2='771.31' y1='251.39' y2='295.19' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aD' x1='757.78' x2='803.37' y1='255.6' y2='313.98' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='aF' x1='770.1' x2='721.84' y1='271.87' y2='227.79' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='aH' x1='770.73' x2='772.97' y1='276.01' y2='251.5' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aJ' x1='770.22' x2='773.08' y1='277.73' y2='246.35' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aL' x1='771.23' x2='771.23' y1='229' y2='275.23' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aN' x1='757.57' x2='803.16' y1='245.06' y2='303.44' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='aP' x1='768.42' x2='745.44' y1='261.84' y2='256.03' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='aR' x1='768.65' x2='770.88' y1='265.79' y2='241.28' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aT' x1='768.13' x2='770.99' y1='267.52' y2='236.13' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aV' x1='769.15' x2='769.15' y1='218.78' y2='265.02' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='aX' x1='755.49' x2='801.08' y1='234.85' y2='293.22' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='aZ' x1='766.34' x2='743.36' y1='251.63' y2='245.81' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bb' x1='769.76' x2='772' y1='254.95' y2='230.43' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bd' x1='769.25' x2='772.11' y1='256.67' y2='225.29' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bf' x1='771.26' x2='769.95' y1='212.79' y2='250.51' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bh' x1='756.6' x2='802.19' y1='224' y2='282.37' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bj' x1='768.92' x2='720.66' y1='240.26' y2='196.19' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bl' x1='771.18' x2='773.41' y1='244.86' y2='220.34' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bn' x1='770.66' x2='773.53' y1='246.58' y2='215.2' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bp' x1='771.81' x2='771.54' y1='209.7' y2='253.5' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='br' x1='758.02' x2='803.61' y1='213.91' y2='272.29' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bt' x1='770.34' x2='722.07' y1='230.18' y2='186.1' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bv' x1='774.46' x2='776.69' y1='234.32' y2='209.81' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bx' x1='773.94' x2='776.8' y1='236.04' y2='204.66' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bz' x1='774.95' x2='774.95' y1='187.31' y2='233.54' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bB' x1='761.3' x2='806.89' y1='203.37' y2='261.75' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bD' x1='772.15' x2='749.17' y1='220.15' y2='214.34' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bF' x1='768.88' x2='771.12' y1='224.1' y2='199.59' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bH' x1='768.37' x2='771.23' y1='225.83' y2='194.45' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bJ' x1='769.38' x2='769.38' y1='177.09' y2='223.33' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bL' x1='755.72' x2='801.31' y1='193.16' y2='251.53' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bN' x1='766.57' x2='743.59' y1='209.94' y2='204.12' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bP' x1='770' x2='772.23' y1='213.26' y2='188.74' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bR' x1='769.48' x2='772.34' y1='214.98' y2='183.6' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bT' x1='771.5' x2='770.18' y1='171.1' y2='208.82' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='bV' x1='756.83' x2='802.42' y1='182.31' y2='240.69' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bX' x1='769.15' x2='720.89' y1='198.58' y2='154.5' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='bZ' x1='741.43' x2='804.84' y1='197.19' y2='197.19' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cb' x1='741.42' x2='804.84' y1='193.3' y2='193.3' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cd' x1='813.65' x2='711.85' y1='194.11' y2='181.74' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cf' x1='741.44' x2='819.1' y1='173' y2='212.67' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ci' x1='727.02' x2='763.55' y1='292.02' y2='292.02' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='ck' x1='678' x2='744.15' y1='240.06' y2='296.42' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cm' x1='750.94' x2='763.55' y1='274.57' y2='274.57' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='co' x1='699.23' x2='763.55' y1='316.11' y2='316.11' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cp' x1='719.12' x2='759.12' y1='244.7' y2='273.7' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cq' x1='714.58' x2='745.41' y1='218.58' y2='258.25' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cr' x1='721.97' x2='708.23' y1='215.32' y2='249.56' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='ct' x1='660.67' x2='738.99' y1='242.87' y2='348.32' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cv' x1='698.61' x2='672.68' y1='291.73' y2='351.65' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cx' x1='663.52' x2='684.83' y1='243.75' y2='295.22' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cy' x1='672.26' x2='771.02' y1='314.57' y2='155.73' gradientTransform='translate(-91.933 -55.8) scale(.45738)' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#00c6e4'/>
            <stop offset='.27' stopColor='#00b5e7'/>
            <stop offset='1' stopColor='#0084f1'/>
          </linearGradient>
          <linearGradient id='cB' x1='572.92' x2='574.91' y1='276.65' y2='254.81' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cD' x1='572.46' x2='575.01' y1='278.18' y2='250.22' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cF' x1='609.46' x2='518.76' y1='269.04' y2='258.02' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cH' x1='606.01' x2='542.6' y1='271.08' y2='258.61' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cK' x1='884.54' x2='839.04' y1='254.99' y2='299.62' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cM' x1='882.81' x2='837.31' y1='253.22' y2='297.85' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cO' x1='887.46' x2='796.76' y1='284.79' y2='273.77' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cQ' x1='873.26' x2='829.01' y1='289.32' y2='271.32' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cT' x1='820.77' x2='823' y1='309.91' y2='285.4' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cV' x1='820.25' x2='823.12' y1='311.63' y2='280.25' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cX' x1='822.27' x2='820.95' y1='267.75' y2='305.47' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='cZ' x1='807.61' x2='853.2' y1='278.96' y2='337.34' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='db' x1='819.93' x2='771.66' y1='295.23' y2='251.16' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#a19eb5'/>
            <stop offset='.04' stopColor='#9895ae'/>
            <stop offset='.19' stopColor='#7c7898'/>
            <stop offset='.36' stopColor='#666187'/>
            <stop offset='.53' stopColor='#56517a'/>
            <stop offset='.73' stopColor='#4d4873'/>
            <stop offset='1' stopColor='#4a4571'/>
          </linearGradient>
          <linearGradient id='dd' x1='823.41' x2='825.64' y1='299.3' y2='274.79' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='df' x1='822.89' x2='825.75' y1='301.03' y2='269.64' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dh' x1='864.42' x2='762.63' y1='290.77' y2='278.4' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dj' x1='816.68' x2='745.5' y1='284.42' y2='270.43' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dp' x1='1128.45' x2='1147.07' y1='543.5' y2='339.3' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dr' x1='1055.47' x2='1174.17' y1='328.67' y2='458.69' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dv' x1='995.2' x2='1066.52' y1='290.52' y2='341.58' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dx' x1='1170.05' x2='1215.93' y1='467.61' y2='326.44' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dz' x1='1152.96' x2='1215.92' y1='304.25' y2='415.07' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dD' x1='1116.45' x2='1158.6' y1='267.72' y2='315.2' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dF' x1='310.05' x2='291.43' y1='543.5' y2='339.3' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dH' x1='383.03' x2='264.33' y1='328.67' y2='458.69' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dL' x1='443.34' x2='372.02' y1='290.54' y2='341.6' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dN' x1='268.46' x2='222.58' y1='467.62' y2='326.45' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dP' x1='285.55' x2='222.59' y1='304.26' y2='415.08' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dT' x1='322.04' x2='279.88' y1='267.69' y2='315.17' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dV' x1='1131.36' x2='1137.83' y1='612.83' y2='464.54' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='dX' x1='1071.23' x2='1161.51' y1='459.98' y2='549.94' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='eb' x1='1026.29' x2='1079.6' y1='434.45' y2='468.93' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ed' x1='305.18' x2='298.7' y1='612.83' y2='464.53' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ef' x1='365.3' x2='275.02' y1='459.98' y2='549.94' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
          <linearGradient id='ej' x1='410.23' x2='356.92' y1='434.47' y2='468.95' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ffc036'/>
            <stop offset='1' stopColor='#ff8d00'/>
          </linearGradient>
        </defs>
        <use width='100%' height='100%' fill='url(#b)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#a'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#c'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#d'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#e'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#f'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#g'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#h'/>
        <use width='100%' height='100%' fill='url(#j)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#i'/>
        <use width='100%' height='100%' fill='url(#l)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#k'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#m'/>
        <use width='100%' height='100%' fill='#00afb5' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#n'/>
        <path fill='#4a4571' d='M262.125 47.842c0-.403.8-.732 1.783-.732.984 0 1.784.33 1.784.732 0 .402-.8.732-1.784.732-.983 0-1.783-.33-1.783-.732z'/>
        <use width='100%' height='100%' fill='url(#p)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#o'/>
        <path fill='url(#q)' d='M226.998 68.836l-16.009-6.54V12.623l31.102-3.842 16.466-2.333v49.626z'/>
        <path fill='#00afb5' d='M210.99 14.362v.732l16.008 6.54L258.557 8.92v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 16.557v.732l16.008 6.54 31.559-12.715v-.777l-31.56 12.76z'/>
        <path fill='#00afb5' d='M210.99 18.707v.732l16.008 6.54 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 20.902v.732l16.008 6.54 31.559-12.715v-.731l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 23.052v.777l16.008 6.541 31.559-12.76v-.733l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 25.247v.732l16.008 6.54 31.559-12.714v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 27.443v.732l16.008 6.54L258.557 22v-.778l-31.56 12.761z'/>
        <path fill='#00afb5' d='M210.99 29.592v.732l16.008 6.54 31.559-12.714v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 31.788v.732l16.008 6.54 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 33.938v.777l16.008 6.54 31.559-12.76v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 36.133v.732l16.008 6.54 31.559-12.715v-.732l-31.56 12.716z'/>
        <path fill='#00afb5' d='M210.99 38.283v.777l16.008 6.54 31.559-12.76v-.732l-31.56 12.761z'/>
        <path fill='#00afb5' d='M210.99 40.478v.732l16.008 6.54 31.559-12.715v-.731l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 42.674v.731l16.008 6.54 31.559-12.714v-.778l-31.56 12.761z'/>
        <path fill='#00afb5' d='M210.99 44.823v.732l16.008 6.54 31.559-12.715v-.731l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 47.019v.731l16.008 6.541 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 49.168v.778l16.008 6.54 31.559-12.76v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 51.364v.732l16.008 6.54 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 53.56v.731l16.008 6.54 31.559-12.715v-.777l-31.56 12.76z'/>
        <path fill='#00afb5' d='M210.99 55.755v.731l16.008 6.541 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 57.904v.778l16.008 6.54 31.559-12.76v-.732l-31.56 12.715z'/>
        <path fill='#00afb5' d='M210.99 60.1v.732l16.008 6.54 31.559-12.715v-.732l-31.56 12.715z'/>
        <path fill='url(#r)' d='M226.998 19.118l-16.009-6.54L242.091 0l16.466 6.403z'/>
        <path fill='url(#s)' d='M247.58 50.815l-7.364 2.927v-40.02l7.364-2.882z'/>
        <path fill='#00afb5' d='M226.86 9.422c0-1.944 3.788-3.522 8.462-3.522 4.674 0 8.462 1.578 8.462 3.522 0 1.944-3.788 3.522-8.462 3.522-4.674 0-8.461-1.578-8.461-3.522zM243.418 5.077c0-.403.823-.732 1.83-.732 1.005 0 1.829.33 1.829.732 0 .402-.824.732-1.83.732-1.006 0-1.83-.33-1.83-.732zM222.79 13.95c0-.402.823-.732 1.83-.732 1.006 0 1.829.33 1.829.732 0 .403-.823.732-1.83.732-1.006 0-1.83-.33-1.83-.732z'/>
        <path fill='url(#t)' d='M240.307 13.767L224.3 7.227l6.815-2.745 16.466 6.358z'/>
        <use width='100%' height='100%' fill='url(#v)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#u'/>
        <use width='100%' height='100%' fill='url(#x)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#w'/>
        <use width='100%' height='100%' fill='url(#z)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#y'/>
        <use width='100%' height='100%' fill='url(#B)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#A'/>
        <use width='100%' height='100%' fill='url(#D)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#C'/>
        <use width='100%' height='100%' fill='url(#F)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#E'/>
        <use width='100%' height='100%' fill='url(#H)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#G'/>
        <use width='100%' height='100%' fill='url(#J)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#I'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#K'/>
        <use width='100%' height='100%' fill='url(#M)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#L'/>
        <use width='100%' height='100%' fill='url(#O)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#N'/>
        <use width='100%' height='100%' fill='url(#Q)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#P'/>
        <use width='100%' height='100%' fill='url(#S)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#R'/>
        <use width='100%' height='100%' fill='url(#U)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#T'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#V'/>
        <use width='100%' height='100%' fill='url(#X)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#W'/>
        <use width='100%' height='100%' fill='url(#Z)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#Y'/>
        <use width='100%' height='100%' fill='url(#ab)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aa'/>
        <use width='100%' height='100%' fill='url(#ad)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ac'/>
        <use width='100%' height='100%' fill='url(#af)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ae'/>
        <use width='100%' height='100%' fill='url(#ah)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ag'/>
        <use width='100%' height='100%' fill='url(#aj)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ai'/>
        <use width='100%' height='100%' fill='url(#al)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ak'/>
        <use width='100%' height='100%' fill='url(#an)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#am'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ao'/>
        <use width='100%' height='100%' fill='url(#aq)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ap'/>
        <use width='100%' height='100%' fill='url(#as)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ar'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#at'/>
        <use width='100%' height='100%' fill='url(#av)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#au'/>
        <use width='100%' height='100%' fill='url(#ax)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aw'/>
        <use width='100%' height='100%' fill='url(#az)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ay'/>
        <use width='100%' height='100%' fill='url(#aB)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aA'/>
        <use width='100%' height='100%' fill='url(#aD)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aC'/>
        <use width='100%' height='100%' fill='url(#aF)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aE'/>
        <use width='100%' height='100%' fill='url(#aH)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aG'/>
        <use width='100%' height='100%' fill='url(#aJ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aI'/>
        <use width='100%' height='100%' fill='url(#aL)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aK'/>
        <use width='100%' height='100%' fill='url(#aN)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aM'/>
        <use width='100%' height='100%' fill='url(#aP)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aO'/>
        <use width='100%' height='100%' fill='url(#aR)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aQ'/>
        <use width='100%' height='100%' fill='url(#aT)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aS'/>
        <use width='100%' height='100%' fill='url(#aV)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aU'/>
        <use width='100%' height='100%' fill='url(#aX)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aW'/>
        <use width='100%' height='100%' fill='url(#aZ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#aY'/>
        <use width='100%' height='100%' fill='url(#bb)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ba'/>
        <use width='100%' height='100%' fill='url(#bd)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bc'/>
        <use width='100%' height='100%' fill='url(#bf)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#be'/>
        <use width='100%' height='100%' fill='url(#bh)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bg'/>
        <use width='100%' height='100%' fill='url(#bj)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bi'/>
        <use width='100%' height='100%' fill='url(#bl)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bk'/>
        <use width='100%' height='100%' fill='url(#bn)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bm'/>
        <use width='100%' height='100%' fill='url(#bp)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bo'/>
        <use width='100%' height='100%' fill='url(#br)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bq'/>
        <use width='100%' height='100%' fill='url(#bt)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bs'/>
        <use width='100%' height='100%' fill='url(#bv)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bu'/>
        <use width='100%' height='100%' fill='url(#bx)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bw'/>
        <use width='100%' height='100%' fill='url(#bz)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#by'/>
        <use width='100%' height='100%' fill='url(#bB)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bA'/>
        <use width='100%' height='100%' fill='url(#bD)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bC'/>
        <use width='100%' height='100%' fill='url(#bF)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bE'/>
        <use width='100%' height='100%' fill='url(#bH)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bG'/>
        <use width='100%' height='100%' fill='url(#bJ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bI'/>
        <use width='100%' height='100%' fill='url(#bL)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bK'/>
        <use width='100%' height='100%' fill='url(#bN)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bM'/>
        <use width='100%' height='100%' fill='url(#bP)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bO'/>
        <use width='100%' height='100%' fill='url(#bR)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bQ'/>
        <use width='100%' height='100%' fill='url(#bT)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bS'/>
        <use width='100%' height='100%' fill='url(#bV)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bU'/>
        <use width='100%' height='100%' fill='url(#bX)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bW'/>
        <use width='100%' height='100%' fill='url(#bZ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#bY'/>
        <use width='100%' height='100%' fill='url(#cb)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ca'/>
        <use width='100%' height='100%' fill='url(#cd)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cc'/>
        <use width='100%' height='100%' fill='url(#cf)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ce'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cg'/>
        <use width='100%' height='100%' fill='url(#ci)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#ch'/>
        <use width='100%' height='100%' fill='url(#ck)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cj'/>
        <use width='100%' height='100%' fill='url(#cm)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cl'/>
        <use width='100%' height='100%' fill='url(#co)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cn'/>
        <path fill='url(#cp)' d='M236.008 67.92l.778-11.022 15.505-2.15-.778 14.454z'/>
        <path fill='url(#cq)' d='M236.786 56.898l-2.379-1.555 7.73-6.86 10.154 6.265z'/>
        <path fill='url(#cr)' d='M234.499 55.343l-9.422 4.848 4.574-5.626 12.486-6.083z'/>
        <use width='100%' height='100%' fill='url(#ct)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cs'/>
        <use width='100%' height='100%' fill='url(#cv)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cu'/>
        <use width='100%' height='100%' fill='url(#cx)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cw'/>
        <path fill='url(#cy)' d='M225.077 60.191l-3.34 4.848s-.41 11.16-.365 11.206c.046.046 1.83 1.006 1.83 1.006l10.062-4.665 2.698-4.71.778-11.024-2.287-1.555z'/>
        <path fill='#fff' d='M242.777 68.333c-4.345 0-6.357 2.012-6.357 6.357 0-4.345-2.013-6.357-6.358-6.357 4.345 0 6.358-2.013 6.358-6.358 0 4.39 2.012 6.358 6.357 6.358z'/>
        <use width='100%' height='100%' fill='#fff' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cz'/>
        <use width='100%' height='100%' fill='url(#cB)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cA'/>
        <use width='100%' height='100%' fill='url(#cD)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cC'/>
        <use width='100%' height='100%' fill='url(#cF)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cE'/>
        <use width='100%' height='100%' fill='url(#cH)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cG'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cI'/>
        <use width='100%' height='100%' fill='url(#cK)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cJ'/>
        <use width='100%' height='100%' fill='url(#cM)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cL'/>
        <use width='100%' height='100%' fill='url(#cO)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cN'/>
        <use width='100%' height='100%' fill='url(#cQ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cP'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cR'/>
        <use width='100%' height='100%' fill='url(#cT)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cS'/>
        <use width='100%' height='100%' fill='url(#cV)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cU'/>
        <use width='100%' height='100%' fill='url(#cX)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cW'/>
        <use width='100%' height='100%' fill='url(#cZ)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#cY'/>
        <use width='100%' height='100%' fill='url(#db)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#da'/>
        <use width='100%' height='100%' fill='url(#dd)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dc'/>
        <use width='100%' height='100%' fill='url(#df)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#de'/>
        <use width='100%' height='100%' fill='url(#dh)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dg'/>
        <use width='100%' height='100%' fill='url(#dj)' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#di'/>
        <use width='100%' height='100%' fill='#ff8400' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dk'/>
        <use width='100%' height='100%' fill='#fff' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dl'/>
        <use width='100%' height='100%' fill='#fff' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dm'/>
        <use width='100%' height='100%' fill='#fff' transform='translate(-91.933 -55.8) scale(.45738)' xlinkHref='#dn'/>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#dp)' xlinkHref='#do'/>
          <use width='100%' height='100%' fill='url(#dr)' xlinkHref='#dq'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#ds'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#dt'/>
          <use width='100%' height='100%' fill='url(#dv)' xlinkHref='#du'/>
        </g>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#dx)' xlinkHref='#dw'/>
          <use width='100%' height='100%' fill='url(#dz)' xlinkHref='#dy'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#dA'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#dB'/>
          <use width='100%' height='100%' fill='url(#dD)' xlinkHref='#dC'/>
        </g>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#dF)' xlinkHref='#dE'/>
          <use width='100%' height='100%' fill='url(#dH)' xlinkHref='#dG'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#dI'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#dJ'/>
          <use width='100%' height='100%' fill='url(#dL)' xlinkHref='#dK'/>
        </g>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#dN)' xlinkHref='#dM'/>
          <use width='100%' height='100%' fill='url(#dP)' xlinkHref='#dO'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#dQ'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#dR'/>
          <use width='100%' height='100%' fill='url(#dT)' xlinkHref='#dS'/>
        </g>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#dV)' xlinkHref='#dU'/>
          <use width='100%' height='100%' fill='url(#dX)' xlinkHref='#dW'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#dY'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#dZ'/>
          <use width='100%' height='100%' fill='url(#eb)' xlinkHref='#ea'/>
        </g>
        <g transform='translate(-91.933 -55.8) scale(.45738)'>
          <use width='100%' height='100%' fill='url(#ed)' xlinkHref='#ec'/>
          <use width='100%' height='100%' fill='url(#ef)' xlinkHref='#ee'/>
          <use width='100%' height='100%' fill='#1a1a3f' xlinkHref='#eg'/>
          <use width='100%' height='100%' fill='#ff8d00' xlinkHref='#eh'/>
          <use width='100%' height='100%' fill='url(#ej)' xlinkHref='#ei'/>
        </g>
      </svg>
    )
  }
}
