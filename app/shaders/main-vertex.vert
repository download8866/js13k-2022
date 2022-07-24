#version 300 es

layout(location = 0) in vec3 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColor;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;

out highp vec3 FragPos;
out highp vec3 Normal;
out lowp vec4 Color;

void main(void) {
  FragPos = aPosition;  // modelMatrix * aPosition
  Normal = aNormal;
  Color = aColor;
  gl_Position = projectionMatrix * viewMatrix * vec4(aPosition, 1);
}
