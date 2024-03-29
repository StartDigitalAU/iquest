import React, { useEffect, useRef } from "react"
import * as THREE from "three"

export default function PerlinNoise() {
  const containerRef = useRef(null)

  useEffect(() => {
    init(containerRef)
  }, [])

  // Three JS
  function init(containerRef) {
    createWorld(containerRef)
    createPrimitive()
    //---
    animation()
  }

  var Theme = { _darkred: 0x000000 }

  //--------------------------------------------------------------------

  var scene, camera, renderer
  var start = Date.now()
  var _width, _height
  function createWorld(containerRef) {
    _width = window.innerWidth
    _height = 500
    //---
    scene = new THREE.Scene()
    //scene.fog = new THREE.Fog(Theme._darkred, 8, 20);
    // scene.background = new THREE.Color(Theme._darkred)
    //---
    camera = new THREE.PerspectiveCamera(55, _width / _height, 1, 1000)
    camera.position.z = 12
    //---
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(_width, _height)
    //---
    containerRef.current.appendChild(renderer.domElement)
    //---
    window.addEventListener("resize", onWindowResize, false)
  }

  function onWindowResize() {
    _width = window.innerWidth
    _height = window.innerHeight
    renderer.setSize(_width, _height)
    camera.aspect = _width / _height
    camera.updateProjectionMatrix()
  }

  //--------------------------------------------------------------------

  var mat
  var primitiveElement = function () {
    this.mesh = new THREE.Object3D()
    mat = new THREE.ShaderMaterial({
      wireframe: false,
      //fog: true,
      uniforms: {
        time: {
          type: "f",
          value: 0.0,
        },
        pointscale: {
          type: "f",
          value: 0.0,
        },
        decay: {
          type: "f",
          value: 0.0,
        },
        complex: {
          type: "f",
          value: 0.0,
        },
        waves: {
          type: "f",
          value: 0.0,
        },
        eqcolor: {
          type: "f",
          value: 4,
        },
        fragment: {
          type: "i",
          value: true,
        },
        redhell: {
          type: "i",
          value: true,
        },
      },
      vertexShader: vertexShader(),
      fragmentShader: fragmentShader(),
    })
    var geo = new THREE.IcosahedronGeometry(3, 7)
    var mesh = new THREE.Points(geo, mat)

    //---
    this.mesh.add(mesh)
  }

  var _primitive
  function createPrimitive() {
    _primitive = new primitiveElement()
    scene.add(_primitive.mesh)
  }

  //--------------------------------------------------------------------

  var options = {
    perlin: {
      vel: 0.0005,
      speed: 0.000005,
      perlins: 2.5,
      decay: 0.65,
      complex: 0.3,
      waves: 50.0,
      eqcolor: 75,
      fragment: false,
      redhell: true,
    },
    spin: {
      sinVel: 0.0,
      ampVel: 40.0,
    },
  }

  //--------------------------------------------------------------------

  function animation() {
    requestAnimationFrame(animation)
    var performance = Date.now() * 0.003

    _primitive.mesh.rotation.y += options.perlin.vel
    _primitive.mesh.rotation.x =
      (Math.sin(performance * options.spin.sinVel) *
        options.spin.ampVel *
        Math.PI) /
      180
    //---
    mat.uniforms["time"].value = options.perlin.speed * (Date.now() - start)
    mat.uniforms["pointscale"].value = options.perlin.perlins
    mat.uniforms["decay"].value = options.perlin.decay
    mat.uniforms["complex"].value = options.perlin.complex
    mat.uniforms["waves"].value = options.perlin.waves
    mat.uniforms["eqcolor"].value = options.perlin.eqcolor
    mat.uniforms["fragment"].value = options.perlin.fragment
    mat.uniforms["redhell"].value = options.perlin.redhell
    //---
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }

  function vertexShader() {
    return `vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    float cnoise(vec3 P)
    {
      vec3 Pi0 = floor(P);
      vec3 Pi1 = Pi0 + vec3(1.0);
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P);
      vec3 Pf1 = Pf0 - vec3(1.0);
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;

      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);

      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);

      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);

      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;

      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);

      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 2.2 * n_xyz;
    }

    float pnoise(vec3 P, vec3 rep)
    {
      vec3 Pi0 = mod(floor(P), rep);
      vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P);
      vec3 Pf1 = Pf0 - vec3(1.0);
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;

      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);

      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);

      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);

      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;

      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);

      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
      return 1.5 * n_xyz;
    }


    varying vec2 vUv;
    varying float noise;
    varying float qnoise;
    varying float displacement;

    uniform float time;
    uniform float pointscale;
    uniform float decay;
    uniform float complex;
    uniform float waves;
    uniform float eqcolor;
    uniform bool fragment;

    float turbulence( vec3 p) {
      float t = - 0.1;
      for (float f = 1.0 ; f <= 3.0 ; f++ ){
        float power = pow( 2.0, f );
        t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
      }
      return t;
    }

    void main() {

      vUv = uv;

      noise = (1.0 *  - waves) * turbulence( decay * abs(normal + time));
      qnoise = (1.0 *  - eqcolor) * turbulence( decay * abs(normal + time));
      float b = pnoise( complex * (position) + vec3( 1.0 * time ), vec3( 100.0 ) );

      if (fragment == true) {
        displacement = - sin(noise) + normalize(b * 0.5);
      } else {
        displacement = - sin(noise) + cos(b * 0.5);
      }

      vec3 newPosition = (position) + (normal * displacement);
      gl_Position = (projectionMatrix * modelViewMatrix) * vec4( newPosition, 1.0 );
      gl_PointSize = (pointscale);

    }`
  }

  function fragmentShader() {
    return `varying float qnoise;

        uniform float time;
        uniform bool redhell;

        void main() {
            float r, g, b;
            if (!redhell == true) {
            r = cos(qnoise + 0.5);
            g = cos(qnoise - 0.5);
            b = 0.0;
            } else {
            r = cos(qnoise + 0.5);
            g = cos(qnoise - 0.5);
            b = abs(qnoise);
            }
            gl_FragColor = vec4(r, g, b, 1.0);
        }`
  }

  return (
    <div
      className="absolute top-0 right-0 translate-x-1/4"
      ref={containerRef}
    ></div>
  )
}
