$( document ). ready( function(){

  let counter = 0;
  let counter_2 = 0;

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  $( "body" ).append( renderer.domElement );

  scene.add( camera );
  camera.position.z = 6;

  let light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 0, camera.position.z );
  scene.add( light );

  let width = 3;
  let height = 3;
  let depth = 3;

  let mallaI = new THREE.Object3D();
  scene.add( mallaI );

  let mallaD = new THREE.Object3D();
  //scene.add( mallaD );

  for( let i = 0; i < width; i++ ){
    for( let j = 0; j < height; j++ ){
        for( let k = 0; k < depth; k++ ){
          let geometry = new THREE.SphereGeometry( 0.3, 0 );
          let material = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
          let nodo = new THREE.Mesh( geometry, material );
          geometry.computeFlatVertexNormals();
          nodo.position.x = -( width/2 ) + i;
          nodo.position.y = -( height/2 ) + j;
          nodo.position.z = -( depth/2 ) + j;
          mallaI.add( nodo );

          let geometry2 = new THREE.SphereGeometry( 0.3, 0 );
          let material2 = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
          let nodo2 = new THREE.Mesh( geometry2, material2 );
          geometry2.computeFlatVertexNormals();
          nodo2.position.x = -( width/2 ) + i;
          nodo2.position.y = -( height/2 ) + j;
          nodo2.position.z = -( depth/2 ) + j;
          mallaD.add( nodo2 );
      }
    }
  }

  function animate(){
      requestAnimationFrame( animate );
      renderer.render( scene, camera );

      mallaI.children[ counter ].material.color.r = 1.0;

      if ( counter > 0 ){
      mallaI.children[ counter - 1 ].material.color.r = 0.0;
      }

      if ( counter == mallaI.children.length - 1 ){
      mallaI.children[ counter ].material.color.r = 0.0;
      }

      counter++;

      if ( counter > mallaI.children.length - 1 ){
        counter = 0;
      }
      //

      mallaD.children[ counter ].material.color.b = 1.0;

      if ( counter > 0 ){
      mallaD.children[ counter - 1 ].material.color.b = 0.0;
      }

      if ( counter == mallaD.children.length - 1 ){
      mallaD.children[ counter ].material.color.b = 0.0;
      }

      counter++;

      if ( counter > mallaD.children.length - 1 ){
        counter = 0;
      }

      mallaI.rotation.y += 0.005;
      mallaD.rotation.y -= 0.005;
      mallaI.rotation.x += 0.005;
      mallaD.rotation.x -= 0.005;
    }
    animate();


$ ( document ).keyup( function ( e ){

  if ( e.key == "ArrowRight" && counter_2 >= 0 && counter_2 <=( mallaI.children.length -1 ) ){
    counter_2++;
  }
  if ( e.key == "ArrowLeft" && counter_2 > 0 ){
    counter_2--;
  }

  for( let i = 0; i < mallaI.children.length; i++){
    mallaI.children[ counter_2 ].scale.x = 2.5
    mallaI.children[ counter_2 ].scale.y = 2.5
    mallaI.children[ counter_2 ].scale.z = 2.5
    mallaI.children[ i ].verticesNeedUpdate;
  }

  mallaI.children[ counter_2 ].scale.x = 2.5
  mallaI.children[ counter_2 ].scale.y = 2.5
  mallaI.children[ counter_2 ].scale.z = 2.5

  });

});
