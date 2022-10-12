import { MODEL_ID_PLAYER_BODY, MODEL_ID_PLAYER_LEG1 } from "./models-ids";
import { mainMenuVisible } from "./game-time";
import { allModels, souls } from "./models";

export const renderModels = (xgl: WebGL2RenderingContext, soulModelId: number, renderPlayer?: boolean) => {
  if (mainMenuVisible) {
    if (hC.width > 1100) {
      // Render player in main menu
      xgl.drawElements(
        xgl.TRIANGLES,
        allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
        xgl.UNSIGNED_SHORT,
        allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
      );
    }
  } else {
    // Render souls
    xgl.drawElementsInstanced(
      xgl.TRIANGLES,
      allModels[soulModelId]!.$vertexEnd! - allModels[soulModelId]!.$vertexBegin!,
      xgl.UNSIGNED_SHORT,
      allModels[soulModelId]!.$vertexBegin! * 2,
      souls.length,
    );

    // // Render levers

    // xgl.drawElementsInstanced(
    //   xgl.TRIANGLES,
    //   allModels[MODEL_ID_LEVER]!.$vertexEnd! - allModels[MODEL_ID_LEVER]!.$vertexBegin!,
    //   xgl.UNSIGNED_SHORT,
    //   allModels[MODEL_ID_LEVER]!.$vertexBegin! * 2,
    //   levers.length,
    // );

    // Render world

    xgl.drawElements(
      xgl.TRIANGLES,
      (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! : allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!) -
        3,
      xgl.UNSIGNED_SHORT,
      3 * 2,
    );
  }
};
