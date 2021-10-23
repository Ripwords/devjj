import gsap from "gsap";

type x = {
  init: boolean,
  px: number,
  to: number
}
type y = {
  init: boolean,
  px: number,
  to: number
}
type opacity = {
  init: boolean,
  opacity: number,
  toOpacity: number
}
type options = {
  beforeEnter: boolean,
  enter: boolean,
  duration: number,
  ease: string
  done: boolean
}

export interface config {
  x?: x,
  y?: y,
  opacity?: opacity,
  options: options
}

export const animationInit = (
  {
    x = {
      init: false,
      px: 0,
      to: 0
    },
    y = {
      init: false,
      px: 0,
      to: 0
    },
    opacity = {
      init: false,
      opacity: 1,
      toOpacity: 1
    },
    options = {
      beforeEnter: false,
      enter: false,
      duration: 0,
      ease: "power1.out",
      done: true
    }
  }: config
) => {
  let beforeEnter: ((el: Element) => void) = () => { }
  let enter: ((el: Element, done: gsap.Callback) => void) | ((el: Element) => void) = () => { }

  if (options.beforeEnter) {
    beforeEnter = (el: any) => {
      if (opacity.init) {
        el.style.opacity = opacity.opacity
      }
      if (x.init) {
        el.style.transform = `translateX(${x.px}px)`
      }
      if (y.init) {
        el.style.transform = `translateY(${y.px}px)`
      }
    }
  }

  if (options.enter && options.done) {
    enter = (el: Element, done: gsap.Callback) => {
      gsap.to(el, {
        duration: options.duration,
        x: x.to,
        y: y.to,
        opacity: opacity.toOpacity,
        ease: options.ease,
        onComplete: done
      })
    }
  }

  if (options.enter && !options.done) {
    enter = (el: Element) => {
      gsap.to(el, {
        duration: options.duration,
        x: x.to,
        y: y.to,
        opacity: opacity.toOpacity,
        ease: options.ease,
      })
    }
  }

  return {
    beforeEnter,
    enter
  }
}
