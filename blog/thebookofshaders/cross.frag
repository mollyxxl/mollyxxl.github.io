// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define PI 3.14159265358979323846

vec2 rotate2D(vec2 _st,float _angle){
    _st -= 0.5;
    _st=mat2(cos(_angle),-sin(_angle),sin(_angle),cos(_angle))*_st;
    _st+=0.5;
    return _st;
    
}
vec2 tile(vec2 _st,float _zoom){
    _st*=_zoom;
    return fract( _st);  //小数部分
}
float box(vec2 _st,vec2 _size,float _smoothEdges){
    _size=vec2(0.5)-_size*0.5;
    vec2 aa=vec2(_smoothEdges*0.5);
    vec2 uv=smoothstep(_size,_size+aa,_st);
	 uv*=smoothstep(_size,_size+aa,vec2(1.0)-_st);
    return uv.x*uv.y;
}
float cross(in vec2 _st,float _size){
    return box(_st,vec2(_size*0.5,_size*0.125),0.01)
        +
        box(_st,vec2(_size*0.125,_size*0.5),0.01);
    
}
void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    
    st.x*=u_resolution.x/u_resolution.y;
    
    vec3 color = vec3(0.);
    
    st=tile(st,4.0);
    
    float box=clamp(cross(fract(st),0.3),0.0,1.0);
    color=vec3(box*vec3(0.308,0.875,1.000));
        
    gl_FragColor = vec4(color,1.0);
}