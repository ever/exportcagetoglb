import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'
//import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader'
import { GLTFExporter } from 'https://unpkg.com/three@0.127.0/examples/jsm/exporters/GLTFExporter'
//import { requirejs } from 'https://unpkg.com/browse/requirejs@2.3.6/require.js'
//import {axios} from 'https://unpkg.com/axios/dist/axios.min'


//------------------------------------------------------------------------------
//LOADING Data FROM SP DATABASE, LOADING GLB FILES
//------------------------------------------------------------------------------

const cageJSON = {
  "spatialId": "DB4_0G_WHSP_50882",
  "area": 7070343.5,
  "units": "Millimeters",
  "validated": null,
  "validatedId": null,
  "parentSpatialId": "DB4_0G_ARCH_71324",
  "ibx": "DB4",
  "floor": "0G",
  "sourceDwg": "WHSP",
  "layer": "CAGE_INFO",
  "geometryType": "Polygon",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          8079.04024103,
          -57064.99999985
        ],
        [
          8079.04024103,
          -54190.00000496
        ],
        [
          10538.29024103,
          -54190.00000496
        ],
        [
          10538.29024103,
          -57064.99999985
        ],
        [
          8079.04024103,
          -57064.99999985
        ]
      ]
    ]
  },
  "width": 0,
  "depth": 0,
  "rotation": 0,
  "radius": 0,
  "externalRefId": "20160714_261439",
  "externalRefDesc": "DB4:0G:00FEC1",
  "createdBy": "lmoore",
  "createdDate": "2021-04-14T12:42:25.467+00:00",
  "lastUpdatedBy": "CK-HYD-0039",
  "lastUpdatedDate": "2022-07-29T10:30:02.568+00:00",
  "wktGeometry": "POLYGON ((8079.04024103 -57064.99999985, 8079.04024103 -54190.00000496, 10538.29024103 -54190.00000496, 10538.29024103 -57064.99999985, 8079.04024103 -57064.99999985))"
}

const contentsJSON = [{"spatialId":"DB4_0G_WHSP_856309","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[10238.29024148,-55768.99999998]},"width":750,"depth":300,"rotation":90,"radius":0,"externalRefId":"20160714_262100","externalRefDesc":"0101","createdBy":"lmoore","createdDate":"2021-11-09T23:14:40.707+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (10238.29024148 -55768.99999998)"},{"spatialId":"DB4_0G_WHSP_856331","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[10238.29024103,-56518.99999998]},"width":750,"depth":300,"rotation":90,"radius":0,"externalRefId":"20160714_262101","externalRefDesc":"0102","createdBy":"lmoore","createdDate":"2021-11-09T23:14:40.707+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (10238.29024103 -56518.99999998)"},{"spatialId":"DB4_0G_WHSP_856419","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[8079.04024058,-55768.99999998]},"width":750,"depth":300,"rotation":90,"radius":0,"externalRefId":"20160714_262105","externalRefDesc":"0302","createdBy":"Emma (Bot)","createdDate":"2022-03-08T23:41:12.071+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (8079.04024058 -55768.99999998)"},{"spatialId":"DB4_0G_WHSP_856375","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[9332.29024148,-56764.99999985]},"width":750,"depth":300,"rotation":0,"radius":0,"externalRefId":"20160714_262102","externalRefDesc":"0201","createdBy":"lmoore","createdDate":"2021-11-09T23:14:40.707+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (9332.29024148 -56764.99999985)"},{"spatialId":"DB4_0G_WHSP_856397","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[8079.04024058,-56518.99999998]},"width":750,"depth":300,"rotation":90,"radius":0,"externalRefId":"20160714_262104","externalRefDesc":"0301","createdBy":"Emma (Bot)","createdDate":"2022-03-08T23:41:12.071+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (8079.04024058 -56518.99999998)"},{"spatialId":"DB4_0G_WHSP_856353","area":225000,"units":"Millimeters","validated":null,"validatedId":null,"parentSpatialId":"DB4_0G_WHSP_50882","ibx":"DB4","floor":"0G","sourceDwg":"WHSP","layer":"_EQX-WHSP-CABS-SHAR","geometryType":"Point","geometry":{"type":"Point","coordinates":[8582.29024148,-56764.99999985]},"width":750,"depth":300,"rotation":0,"radius":0,"externalRefId":"20160714_262103","externalRefDesc":"0202","createdBy":"lmoore","createdDate":"2021-11-09T23:14:40.707+00:00","lastUpdatedBy":"Emma (Bot)","lastUpdatedDate":"2022-07-28T21:47:06.803+00:00","wktGeometry":"POINT (8582.29024148 -56764.99999985)"}]
const contentsPoints = [[10238.29024148, 0,-55768.99999998], [10238.29024103, 0,-56518.99999998], 
[8079.04024058, 0,-55768.99999998], [9332.29024148, 0,-56764.99999985],
[8079.04024058, 0,-56518.99999998], [8582.29024148, 0,-56764.99999985]]; 

console.log(cageJSON);

let cagePoints = cageJSON.geometry.coordinates[0];
//cagePoints.push();
console.log('cagePoints: ', cagePoints);

let cageSides = [];
let cageVerticalSides = [];
let cageHorizontalSides = [];

for (let i = 0; i < (cagePoints.length-1); i++) {
  cageSides[i] = [[cagePoints[i]], [cagePoints[i+1]]];
  //console.log('cageSides pairs: ', [cagePoints[i]],' ', [cagePoints[i+1]]);
}

console.log('cageSides: ', cageSides);
console.log('cageSides: ', cageSides[1]);
let cageLength = cageSides[1][1][0][0] - cageSides[1][0][0][0];
console.log('cageLength: ', cageLength, cageSides[1][0][0], cageSides[1][0][0])

//const cage = JSON.parse(cageJSON);
//console.log(cage);

//----------------------------------------------------------------------------------------------------------------------
// Scenecreating 
//----------------------------------------------------------------------------------------------------------------------
/* 
y
|
0-x, z for depth */

const panels = []
// panel800 = new THREE.mesh();
// panels.push(['panel800',panel800]);
console.log('panels: ', panels);

//create a blue LineBasicMaterial
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
cagePoints.forEach((item, index, arr) => {
  points.push( new THREE.Vector3( item[0]/1000, 0, item[1]/1000 ) );
});

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );




console.log({points}); //points is an array of THREE.Vector3


const scene = new THREE.Scene()

scene.add( line );

const geometry = new THREE.BoxGeometry(0.1,0.1,0.1)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
})

const cubeArray = [];
//new THREE.Mesh(geometry, material)

contentsPoints.forEach((item, index, arr) => {
  cubeArray.push( new THREE.Mesh(geometry, material));
  cubeArray[index].position.set(contentsPoints[index][0]/1000, 0, contentsPoints[index][2]/1000);
  scene.add(cubeArray[index]);
  console.log('cube position: ', cubeArray[index].position);
});

/* cube.position.set(contentsPoints[0][0]/1000, 0, contentsPoints[0][2]/1000);
console.log('cube position: ', cubeArray[0].position);
scene.add(cube)  */

// dodaje tri ose
/* const axisHelper = new THREE.AxesHelper(5)
scene.add(axisHelper) 

const gridHelper = new THREE.GridHelper(10, 10)
scene.add(gridHelper)

const canvas = document.querySelector('canvas.webgl')

const geometry = new THREE.BoxGeometry(1,1,2)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube) */

//----------------------------------------------------------------------------------------------------------------------
/* const loader = new GLTFLoader();

loader.load( 'models/cage.glb', function ( gltf ) {

	scene.add ( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} ); */

//scene.add ()
//mesh.position.x = (xDistance * i) + xOffset;
//----------------------------------------------------------------------------------------------------------------------
/* const loader2 = new GLTFLoader();

loader2.load( 'cage/panel800j.glb', function ( gltf ) {
  
  scene.add( gltf.scene );
  gltf.scene.position.x = 0.8;
	//scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} ); */



//----------------------------------------------------------------------------------------------------------------------
// EXPORT the scene to glb
//-------------------------

const btn = document.getElementById('download-glb');
btn.addEventListener('click', download )


function download() {
  const exporter = new GLTFExporter();
  exporter.parse(
    scene,
    function (result) {
      saveArrayBuffer(result, 'scene.glb');
    },
    { binary: true }
  );
}

function saveArrayBuffer(buffer, filename) {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

const link = document.createElement('a');
//link.style.display = 'none';
document.body.appendChild(link); // Firefox workaround, see #6594

function save(blob, filename) {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();

  // URL.revokeObjectURL( url ); breaks Firefox...
}

//download()
