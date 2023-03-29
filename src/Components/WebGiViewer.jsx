import React, {useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect} from 'react';
import {
    AssetManagerPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    SSAOPlugin,
    SSRPlugin,
    TonemapPlugin,
    ViewerApp

} from "webgi";
import {scrollAnimation} from "../lib/scroll-animation.js";

const WebGiViewer = () => {

    const canvasRef = useRef(null);

    const memorizedScrollAnimation = useCallback((position, target, onUpdate) => {
        if (position && target && onUpdate) {
            scrollAnimation();
        }
    }, []);


    const setupViewer = useCallback(async () => {

        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })


        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)

        await viewer.addPlugin(BloomPlugin)


        viewer.renderer.refreshPipeline()

        const scenePath = 'scene-black.glb';

        await manager.addFromPath('scene-black.glb');

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false});

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener('preFrame', () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });


        memorizedScrollAnimation(position,target,onUpdate);

    }, []);


    useEffect(() => {
        return () => {
            setupViewer().then(r => r);
        };
    }, []);


    return (
        <div id={'webgi-canvas-container'}>
            <canvas id={'webgi-canvas'} ref={canvasRef}/>
        </div>
    );
};

export default WebGiViewer;
