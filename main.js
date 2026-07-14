console.log("game");






var pos_x = 0;
var pos_y = 0;

//tri
function formTriangle(){

game.vertexShaderSource = `
attribute vec2 a_pos;

void main(){
    gl_Position = vec4(a_pos, 0 , 1);
    //gl_PointSize = 150.0;

}
`;

game.fragmentShaderSource = `

void main(){
    gl_FragColor = vec4(0 , 0, 1 , 1);
}
`;

var Vertex_Shader = game.createShader(gl , gl.VERTEX_SHADER , game.vertexShaderSource);
var Fragment_Shader = game.createShader(gl , gl.FRAGMENT_SHADER , game.fragmentShaderSource);
var Program = game.createProgram(gl , Vertex_Shader , Fragment_Shader);



    
        
game.setSize(250 , 250);
game.setViewportWebgl();
game.bgColor(255 , 0 , 0 ,1);

game.setGeometry.Triangle(gl , 
    0 + pos_x , 0 + pos_y,
    0.5 + pos_x, 0 + pos_y ,
    0 +pos_x, 0.5 + pos_y
);
game.setGh(Program , "a_pos");
gl.useProgram(Program);
//gl.drawArrays(gl.POINTS , 0 , 1);
game.drawScene("triangle");


}


//point
function formLargePoint(){

game.vertexShaderSource = `
attribute vec2 a_pos;

void main(){
    gl_Position = vec4(a_pos, 0 , 1);
    gl_PointSize = 150.0;

}
`;

game.fragmentShaderSource = `

void main(){
    gl_FragColor = vec4(0 , 0, 1 , 1);
}
`;

var Vertex_Shader = game.createShader(gl , gl.VERTEX_SHADER , game.vertexShaderSource);
var Fragment_Shader = game.createShader(gl , gl.FRAGMENT_SHADER , game.fragmentShaderSource);
var Program = game.createProgram(gl , Vertex_Shader , Fragment_Shader);


     
game.setSize(250 , 250);
game.setViewportWebgl();
game.bgColor(0 , 1 , 0 ,1);
//pos_x += 0.01;

gl.useProgram(Program);
//gl.drawArrays(gl.POINTS , 0 , 1);
game.drawScene("point");


}

//formLargePoint();
formTriangle();




