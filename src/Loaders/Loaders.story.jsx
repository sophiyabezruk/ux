import React from 'react';
import Story from '../Story';
import ScaleRippleMulti from './ScaleRippleMulti';
import ScaleRipple from './ScaleRipple';
import LineSpin from './LineSpin';
import LineScaleRandom from './LineScaleRandom';
import LineScale from './LineScale';
import LinePulseOut from './LinePulseOut';
import BallsZigZagDeflect from './BallsZigZagDeflect';
import BallsZigZag from './BallsZigZag';
import BallsTriangleTrace from './BallsTriangleTrace';
import BallSpin from './BallSpin';
import BallScaleRandom from './BallScaleRandom';
import BallScaleMulti from './BallScaleMulti';
import BallScale from './BallScale';
import BallRotate from './BallRotate';
import BallPulseSync from './BallPulseSync';
import BallPulseRise from './BallPulseRise';
import BallPulse from './BallPulse';
import BallGridPulse from './BallGridPulse';
import BallClipRotatePulse from './BallClipRotatePulse';
import BallClipRotateMultiple from './BallClipRotateMultiple';
import BallClipRotate from './BallClipRotate';
import BallBeat from './BallBeat';


export default ({ storiesOf }) => (
  storiesOf('hz/Loaders', module)
    .add('Default', () => (
      <Story>
        <LineSpin color="#1890ff" />
      </Story>
    ))
    .add('ScaleRipple', () => (
      <Story>
        <ScaleRipple color="#1890ff" type="rapid" />
      </Story>
    ))
    .add('ScaleRippleMulti', () => (
      <Story>
        <ScaleRippleMulti color="#1890ff" />
      </Story>
    ))
    .add('LineScaleRandom', () => (
      <Story>
        <LineScaleRandom color="#1890ff" />
      </Story>
    ))
    .add('LineScale', () => (
      <Story>
        <LineScale color="#1890ff" />
      </Story>
    ))
    .add('LinePulseOut', () => (
      <Story>
        <div style={{ padding: 30 }}>
          <LinePulseOut color="#1890ff" type="default" />
        </div>
        <div style={{ padding: 30 }}>
          <LinePulseOut color="#1890ff" type="rapid" />
        </div>
      </Story>
    ))
    .add('BallsZigZagDeflect', () => (
      <Story>
        <BallsZigZagDeflect color="#1890ff" />
      </Story>
    ))
    .add('BallsZigZag', () => (
      <Story>
        <BallsZigZag color="#1890ff" />
      </Story>
    ))
    .add('BallsTriangleTrace', () => (
      <Story>
        <BallsTriangleTrace color="#1890ff" />
      </Story>
    ))
    .add('BallSpin', () => (
      <Story>
        <BallSpin color="#1890ff" />
      </Story>
    ))
    .add('BallScaleRandom', () => (
      <Story>
        <BallScaleRandom color="#1890ff" />
      </Story>
    ))
    .add('BallScaleMulti', () => (
      <Story>
        <BallScaleMulti color="#1890ff" />
      </Story>
    ))
    .add('BallScale', () => (
      <Story>
        <BallScale color="#1890ff" />
      </Story>
    ))
    .add('BallRotate', () => (
      <Story>
        <BallRotate color="#1890ff" />
      </Story>
    ))
    .add('BallPulseSync', () => (
      <Story>
        <BallPulseSync color="#1890ff" />
      </Story>
    ))
    .add('BallPulseRise', () => (
      <Story>
        <BallPulseRise color="#1890ff" />
      </Story>
    ))
    .add('BallPulse', () => (
      <Story>
        <BallPulse color="#1890ff" />
      </Story>
    ))
    .add('BallGridPulse', () => (
      <Story>
        <div style={{ padding: 30 }}>
          <BallGridPulse color="#1890ff" />
        </div>
        <div style={{ padding: 30 }}>
          <BallGridPulse color="#1890ff" type="beat" />
        </div>
      </Story>
    ))
    .add('BallClipRotatePulse', () => (
      <Story>
        <BallClipRotatePulse color="#1890ff" />
      </Story>
    ))
    .add('BallClipRotateMultiple', () => (
      <Story>
        <BallClipRotateMultiple color="#1890ff" />
      </Story>
    ))
    .add('BallClipRotate', () => (
      <Story>
        <BallClipRotate color="#1890ff" />
      </Story>
    ))
    .add('BallBeat', () => (
      <Story>
        <BallBeat color="#1890ff" />
      </Story>
    ))
);
