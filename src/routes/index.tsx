import {
  component$,
  useClientEffect$,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Engine,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import styles from "./index.css?inline";
// import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  useClientEffect$(() => {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

    if (canvas === null) {
      return;
    }

    const engine = new Engine(canvas, true);

    const createScene = function () {
      const scene = new Scene(engine);

      const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

      camera.setTarget(Vector3.Zero());

      camera.attachControl(canvas, true);

      const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

      light.intensity = 0.7;

      const sphere = MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2, segments: 32 },
        scene
      );

      sphere.position.y = 1;

      // eslint-disable-next-line
      const ground = MeshBuilder.CreateGround(
        "ground",
        { width: 6, height: 6 },
        scene
      );

      return scene;
    };

    const scene = createScene();

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });
  });

  return (
    <div>
      <h1>Welcome to Qwik and BabylonJS example</h1>
      <canvas id="renderCanvas"></canvas>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik and BabylonJS",
  meta: [
    {
      name: "description",
      content: "Qwik and BabylonJS",
    },
  ],
};
