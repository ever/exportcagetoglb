// ...
//import axios from 'axios';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import { GLTFExporter } from './three.js-master/examples/jsm/exporters/GLTFExporter'
//import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader'
import { GLTFExporter } from 'https://unpkg.com/three@0.127.0/examples/jsm/exporters/GLTFExporter'
//import { requirejs } from 'https://unpkg.com/browse/requirejs@2.3.6/require.js'
//import {axios} from 'https://unpkg.com/axios/dist/axios.min'
import 'https://unpkg.com/axios/dist/axios.min.js'



/* const a = new THREE.Euler( - Math.PI / 2, 0, 0, 'XYZ' );
const b = new THREE.Vector3( 1, 0, 1 );
b.applyEuler(a); */

const scene = new THREE.Scene()

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const usid = urlParams.get('usid')
console.log(usid);



/* let cagePoints = cageJSON02.geometry.coordinates[0];
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
console.log('cageLength: ', cageLength, cageSides[1][0][0], cageSides[1][0][0]) */

//const cage = JSON.parse(cageJSON);
//console.log(cage);

//----------------------------------------------------------------------------------------------------------------------
// Scenecreating 
//----------------------------------------------------------------------------------------------------------------------
/* 
y
|
0-x, z for depth */

//const panels = []
// panel800 = new THREE.mesh();
// panels.push(['panel800',panel800]);
//console.log('panels: ', panels);

/* //----------------------------------------------------------------------------------------------------------------------
// SHOW CAGE OUTLINE WITH LINE SEGMENTS
//create a blue LineBasicMaterial
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
cagePoints.forEach((item, index, arr) => {
  points.push( new THREE.Vector3( item[0]/1000, 0, item[1]/1000 ) );
});

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );

console.log({points}); //points is an array of THREE.Vector3


scene.add( line ); */

/* //----------------------------------------------------------------------------------------------------------------------
// SHOW CAGE CONTENTS INSERTION POINTS WITH CUBES
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
//----------------------------------------------------------------------------------------------------------------------
 */

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
/* const panels = []
//const panelwpost1200 = new THREE.mesh();
//panels.push(['panelwpost1200',panelwpost1200]);
const loadedMeshG = new THREE.Mesh
const loader2 = new GLTFLoader();

var loadedModel = loader2.load( 'cage/panel800j.glb', function ( gltf ) {
  
  //console.log('gltf: ', gltf);
  //const loadedGeometry = gltf.scene.children[0].geometry;
  //const loadedMaterial = gltf.scene;
  //const loadedMesh = new THREE.Mesh( gltf.scene.children[0] );
  var loadedMesh = gltf.scene.children[0] 
  scene.add( loadedMesh );
  //scene.add( gltf.scene );
  loadedMesh.position.x = 0.8;
  //loadedMesh.rotateY( Math.PI / 2 );
  //loadedMesh.position.set( -100, -100, 0 );

  //mesh = gltf.scene.clone();
 // mesh.position.x = 0.8;
  //scene.add(mesh);

	//scene.add( gltf.scene );
  console.log('loadedMesh: ', loadedMesh);
return loadedMesh;

}, undefined, function ( error ) {

	console.error( error );

} ); 

console.log('loader2: ', loader2);
//console.log('loadedModel: ', loadedModel);
//scene.add(loadedModel)

/* loadToScene(loadedModel);

function loadToScene(model){
  model.position.set(0,0,0);
  scene.add(model);
  model.position.set(0,0,5);
  scene.add(model);
  } 
  console.log('============================================================='); */
//----------------------------------------------------------------------------------------------------------------------


/* var gltfLoader = new THREE.GLTFLoader();
var result = await gltfLoader.loadAsync('cage/cabinet.glb');
//var loadedMesh = gltf.scene.children[0]
scene.add(result); */





//######################################################################################################################
//----------------------------------------------------------------------------------------------------------------------
// GETTING THE DATA FROM SPATIAL DATABASE
//------------------------------------------------------------------------------------------


const getSpatialData = async (ibx, floor, cageUSID) => { // 'ibxSourceDWGDetails'
  try {
    const response = await axios.get(SPDB_URL + 'sptlvdccntrl/spatialAttributes', { params: { ibx, floor, user: 'vdc' } });
    const records = response.data;
    
    //console.log(records);
    const cg=records.find(e => e.externalRefDesc === cageUSID)  // Find Cage
    console.log('cage cg: ');
    console.log(cg);

    const content=records.filter(e => e.parentSpatialId === cg.spatialId) // Filter Cage Content
    console.log('content: ');
    console.log(content);

/*     content=records.filter(e => e.parentSpatialId === spatialId) // Filter Cage Content
    console.log('content: ');
    console.log(content);*/

    const vent = content.filter(e => e.layer === "_EQX-WHSP-FLOR-VENT") //"layer":"_EQX-WHSP-FLOR-VENT" // Filter Floor Vent
    console.log('vent: ');
    console.log(vent);

    const cabinets = content.filter(e => e.layer === "_EQX-WHSP-CABS-PRIV") //"layer":"_EQX-WHSP-CABS-PRIV" // Filter Cabinets
    console.log('cabinets: ');
    console.log(cabinets); 

    //const myJSON = JSON.stringify(content);
    //console.log(myJSON);
    
    return {
      cage: cg,
      cont: content,
      cab: cabinets,
      vent: vent,
      //cage: records.find(e => e.spatialId === spatialId),
      //contents: records.filter(e => e.parentSpatialId === spatialId)
    }
  } catch (error) {
    console.error('Spatial Gateway failed request', error.response && error.response.data ? error.response.data : '');
    throw error;
  }
}

//----------------------------------------------------------------------------------------------------------------------
//######################################################################################################################
//----------------------------------------------------------------------------------------------------------------------
// #######   Main ###############
//--------------------------------

const defaultUSID = 'DB4:01:Z7B650';
const USID = usid;
const SPDB_URL = 'https://spatialdev.corp.equinix.com/spatial-geom-data-service/rsservice/';

const IBX = USID.substring(0, 3);
const FLOOR = USID.substring(4, 6);
//const USER = 'vdc';
console.log(USID, IBX, FLOOR);



//--------------------------------
// Async part of nain with IFIE
//--------------------------------

(async () => {
  const spatialData = await getSpatialData(IBX, FLOOR, USID);
  //console.log('result: ', await getSpatialData(IBX, FLOOR, USID))  //DB4_0G_WHSP_50831
  console.log('result: ', spatialData.cage)

 // const cageJSON = JSON.stringify(spatialData.cage);
  const cageJSON = spatialData.cage;
  console.log('result: ', cageJSON)

  let cagePoints = cageJSON.geometry.coordinates[0];
  let cagePoint0 = cagePoints[1];
  let cagePoint0X = cagePoint0[0];
  let cagePoint0Y = cagePoint0[1];
//cagePoints.push();
console.log('cagePoints: ', cagePoints);
console.log('cagePoint0: ', cagePoint0, cagePoint0X/1000, cagePoint0Y/1000);

//loadedMesh.position.set( -100, -100, 0 );
//loadedMesh.position.set( cagePoints[0][0]/1000, 0, cagePoints[0][2]/1000 );
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
//----------------------------------------------------------------------------------------------------------------------
// AxesHelper
//const axisHelper = new THREE.AxesHelper(5)
//scene.add(axisHelper) 

//----------------------------------------------------------------------------------------------------------------------
// SHOW CAGE OUTLINE WITH LINE SEGMENTS
//create a blue LineBasicMaterial

const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
cagePoints.forEach((item, index, arr) => {
  points.push( new THREE.Vector3( item[0]/1000, 0, item[1]/1000*(-1) ) );
});

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );

console.log({points}); //points is an array of THREE.Vector3


scene.add( line );

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// Async loading multiple glbs at the same time
//------------------------------------------------------------------------------------------------------
var loaderp = new GLTFLoader();
const [cabinetGLB, air_ventGLB, modelC, modelD] = await Promise.all([
  loaderp.loadAsync('cage/cabinet.glb'),
  loaderp.loadAsync('cage/air_vent.glb'),
  loaderp.loadAsync('cage/tile.glb'),
  loaderp.loadAsync('cage/postwpanel260mmendj.glb'),
]);

var cabinetMesh = cabinetGLB.scene.children[0]  // Taking only cabinet mesh from loaded glb
const cabinetsData = spatialData.cab; // Taking only cabinets data from spatialData
console.log('cabinetsData: ', cabinetsData);
//const cabinetInsertionPoints = cabinetJSON.geometry.coordinates;
const cabinetArray = [];
const cabinetInsertionPoints = [];
//new THREE.Mesh(geometry, material)

cabinetsData.forEach((item, index, arr) => {
  let x = cabinetsData[index].geometry.coordinates[0]/1000;
  let z = cabinetsData[index].geometry.coordinates[1]/1000*(-1); // mirroring position on Z axis
  let rotation = cabinetsData[index].rotation;
  console.log([index], 'cabinetsData: ', x, z, rotation);
  cabinetInsertionPoints.push([x,0,z, rotation]);
  //cabinetInsertionPoints[1].push( cabinetsData[index].geometry.coordinates[1] );
  //position.set(cabinetInsertionPoints[index][0]/1000, 0, cabinetInsertionPoints[index][2]/1000);
  //scene.add(cubeArray[index]);
 
});
console.log('cabinetInsertionPoints: ', cabinetInsertionPoints);

var mesh;

cabinetInsertionPoints.forEach((item, index, arr) => {


    mesh = cabinetMesh.clone();
    // changes made to position and rotation to not effect original
    //rad = Math.PI * 2 * (i / 10);
    //x = Math.cos(rad) * 3;
    //z = Math.sin(rad) * 3;
    //mesh.position.set(x, 0, z);
    mesh.position.set( cabinetInsertionPoints[index][0],cabinetInsertionPoints[index][1],cabinetInsertionPoints[index][2] );
    mesh.rotateY(cabinetInsertionPoints[index][3]*Math.PI / 180);

 
    scene.add(mesh);
    cabinetArray.push(mesh);
});


//----------------------------------------------------
var air_ventMesh = air_ventGLB.scene.children[0]  // Taking only cabinet mesh from loaded glb
const air_ventData = spatialData.vent; // Taking only cabinets data from spatialData
console.log('air_ventData: ', air_ventData);
//const cabinetInsertionPoints = cabinetJSON.geometry.coordinates;
const air_ventArray = [];
const air_ventInsertionPoints = [];
//new THREE.Mesh(geometry, material)

air_ventData.forEach((item, index, arr) => {
  let x = air_ventData[index].geometry.coordinates[0]/1000;
  let z = air_ventData[index].geometry.coordinates[1]/1000*(-1); // mirroring position on Z axis
  let rotation = air_ventData[index].rotation;
  console.log([index], 'air_ventData: ', x, z, rotation);
  air_ventInsertionPoints.push([x,0,z, rotation]);
  //cabinetInsertionPoints[1].push( cabinetsData[index].geometry.coordinates[1] );
  //position.set(cabinetInsertionPoints[index][0]/1000, 0, cabinetInsertionPoints[index][2]/1000);
  //scene.add(cubeArray[index]);
 
});
console.log('air_ventInsertionPoints: ', air_ventInsertionPoints);

var mesh;

air_ventInsertionPoints.forEach((item, index, arr) => {


    mesh = air_ventMesh.clone();
    // changes made to position and rotation to not effect original
    //rad = Math.PI * 2 * (i / 10);
    //x = Math.cos(rad) * 3;
    //z = Math.sin(rad) * 3;
    //mesh.position.set(x, 0, z);
    mesh.position.set( air_ventInsertionPoints[index][0],air_ventInsertionPoints[index][1],air_ventInsertionPoints[index][2] );
    mesh.rotateY(air_ventInsertionPoints[index][3]*Math.PI / 180);

 
    scene.add(mesh);
    air_ventArray.push(mesh);
});


//----------------------------------------------------------------------------------------------------------------------
// SHOW CAGE CONTENTS INSERTION POINTS WITH CUBES
const geometry = new THREE.BoxGeometry(0.1,0.1,0.1)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
})

const cubeArray = [];
//new THREE.Mesh(geometry, material)

air_ventInsertionPoints.forEach((item, index, arr) => {
  cubeArray.push( new THREE.Mesh(geometry, material));
  cubeArray[index].position.set(air_ventInsertionPoints[index][0], 0, air_ventInsertionPoints[index][2]);
  scene.add(cubeArray[index]);
  console.log('cube position: ', cubeArray[index].position);
});

//scene.add(cubeArray);
//----------------------------------------------------------------------------------------------------------------------


/* cube.position.set(contentsPoints[0][0]/1000, 0, contentsPoints[0][2]/1000);
console.log('cube position: ', cubeArray[0].position);
scene.add(cube)  */

//----------------------------------------------------
//scene.add(modelA.scene);
//scene.add(modelB.scene);
//scene.add(modelC.scene);
//scene.add(modelD.scene);
//------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------

const panels = []
//const panelwpost1200 = new THREE.mesh();
//panels.push(['panelwpost1200',panelwpost1200]);
//const loadedMeshG = new THREE.Mesh
const loader2 = new GLTFLoader();

var loadedModel = loader2.load( 'cage/panelwpost1190j.glb', function ( gltf ) {
  
  //console.log('gltf: ', gltf);
  //const loadedGeometry = gltf.scene.children[0].geometry;
  //const loadedMaterial = gltf.scene;
  //const loadedMesh = new THREE.Mesh( gltf.scene.children[0] ); ne na ovaj nacin
  var loadedMesh = gltf.scene.children[0]
  scene.add( loadedMesh );
  //scene.add( gltf.scene );
  //loadedMesh.position.x = 0.8;
  //loadedMesh.rotateY( Math.PI / 2 );
  //loadedMesh.position.set( -100, -100, 0 );
  loadedMesh.position.set( cagePoint0X/1000, 0, cagePoint0Y/1000*(-1) ); // mirroring position on Z axis

  var i = 1.2, mesh, rad, x, z;
while (i < 6) {
    mesh = loadedMesh.clone();
    // changes made to position and rotation to not effect original
    //rad = Math.PI * 2 * (i / 10);
    //x = Math.cos(rad) * 3;
    //z = Math.sin(rad) * 3;
    //mesh.position.set(x, 0, z);
    mesh.position.set( i+cagePoint0X/1000, 0, cagePoint0Y/1000*(-1) ); // mirroring position on Z axis

 
    scene.add(mesh);
    i += 1.2;
}
  //mesh = gltf.scene.clone();
 // mesh.position.x = 0.8;
  //scene.add(mesh);

	//scene.add( gltf.scene );
  console.log('loadedMesh: ', loadedMesh);
return loadedMesh;

}, undefined, function ( error ) {

	console.error( error );

} ); 

console.log('loader2: ', loader2);
//console.log('loadedModel: ', loadedModel);
//scene.add(loadedModel)

/* loadToScene(loadedModel);

function loadToScene(model){
  model.position.set(0,0,0);
  scene.add(model);
  model.position.set(0,0,5);
  scene.add(model);
  } */
  console.log('=============================================================');



})();
//------------------------------------------------------------------------------------------------------
// END OF Async part of MAIN
//------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------

// EXPORT the scene to glb

//--------------------------------------------

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
//--------------------------------------------
// END EXPORT the scene to glb
//-------------------------