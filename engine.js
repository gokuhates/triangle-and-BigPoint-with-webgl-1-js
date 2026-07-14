console.log("engine.js");


var canvas = document.getElementById("render");
var gl = canvas.getContext("webgl");

if(!gl){
    console.error("webgl not suported!");
}



//var program = gl.createProgram();

var game = {

    vertexShaderSource :`  
    `,
    fragmentShaderSource :`
    `,

    createShader:function(gl , type , Source){
        var shader = gl.createShader(type);
        gl.shaderSource(shader , Source);
        gl.compileShader(shader);

        var success = gl.getShaderParameter(shader , gl.COMPILE_STATUS);

        if(success){
            return shader;
        }

        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);

    
    },
    createProgram:function(gl , VS , FS){

        var program = gl.createProgram();
        gl.attachShader(program , VS);
        gl.attachShader(program , FS);
        gl.linkProgram(program);

        var success = gl.getProgramParameter(program , gl.LINK_STATUS);

        if(success){
            return program;
        }

        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);

    },
    setSize:function(width , height){

        canvas.height = height;
        canvas.width =  width;
        console.log("Width:",width );
        console.log("Height:",height);
    
    },
    bgColor(r,g,b,a){

        gl.clearColor(r , g , b, a);
        gl.clear(gl.COLOR_BUFFER_BIT);
        console.log(r , g , b ,a);

    },
    drawScene:function(IF_STRING){
       
        switch(IF_STRING){
            case "point":
                gl.drawArrays(gl.POINTS , 0 , 1);
            break;
            case "triangle":
                gl.drawArrays(gl.TRIANGLES , 0 , 3);
            break;
            case "non":
                console.warn("false is drawScene");
            break;

        }

    },
    setGeometry:{
       Triangle:function(gl ,  vx1 , vy1  , vx2 , vy2 , vx3 , vy3){

        var vertexPosition = [
            vx1 , vy1,
            vx2 , vy2,
            vx3 , vy3,

        ];

        console.log("vertex Triangle:", vertexPosition);

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER , buffer);
        gl.bufferData(gl.ARRAY_BUFFER , new Float32Array(vertexPosition) , gl.STATIC_DRAW);

       },
       

    },
    keyboardInputPress:function(key , after_key){
        window.addEventListener("keypress",(keyboardEvent)=>{
            if(keyboardEvent.key == key){
                after_key();
            }
        });


    },
    keyboardInputUp:function(key , after_key){
        window.addEventListener("keyup",(keyboardEvent)=>{
            if(keyboardEvent.key == key){
                after_key();
            }
        });


    },
    setViewportWebgl:function(){

        gl.viewport(0 , 0 , canvas.width , canvas.height);

    },
    setGh:function(uProgram , valueLink){
        var positionAttributeLocation = gl.getAttribLocation(uProgram , valueLink);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(
            positionAttributeLocation,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );

    },
  
    

};

