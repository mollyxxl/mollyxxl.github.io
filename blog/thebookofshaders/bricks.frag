// Author:xxl
// Title:Bricks
​
#ifdef GL_ES
precision mediump float;
#endif
​
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
​
vec2 brickTile(vec2 _st,float _zoom){
    _st*=_zoom;
    _st.x+=step(1.,mod(_st.y,2.0))*0.5;  //偶数行偏移0.5
    return fract( _st);  //小数部分
}
float box(vec2 _st,vec2 _size){
    _size=vec2(0.5)-_size*0.5;
    vec2 uv=smoothstep(_size,_size+vec2(0.00001),_st);
     uv*=smoothstep(_size,_size+vec2(0.00001),vec2(1.0)-_st);
    return uv.x*uv.y;
}
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
     
    vec3 color = vec3(0.);
    
    st=brickTile(st,5.0);
    float box=box(st,vec2(0.95));
    color=vec3(box*vec3(0.308,0.875,1.000));
        
  //  color = vec3(st.x,st.y,abs(cos(u_time+vec2(0.530,0.810))));
​
    gl_FragColor = vec4(color,1.0);
}