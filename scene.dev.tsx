import * as DCL from "decentraland-api";

export default class SampleScene extends DCL.ScriptableScene {
	async render() {
		return (
			<scene>
				<gltf-model
					position={{ x: 0, y: 0.5, z: 0 }}
					src="./models/parallel_polis.glb"
				/>
			</scene>
		);
	}
}
