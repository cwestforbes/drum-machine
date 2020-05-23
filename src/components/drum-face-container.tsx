/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { connect } from "react-redux";
import ChannelRack from "./channel-rack";
import TransportControls from "./transport-controls";
import {
  AppState,
  Instruments,
  SelectBeatParams,
  IsPlaying,
} from "../redux/core";
import * as actionCreators from "../redux/action-creators";

interface DrumFaceContainerProps {
  instruments: Instruments;
  isPlaying: IsPlaying;
  selectBeatAction: (params: SelectBeatParams) => void;
  setToggleIsPlaying: (isPlaying: IsPlaying) => void;
  handleStartPlayback: () => void;
}

const appContainer: SerializedStyles = css`
  text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const appHeader: SerializedStyles = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const DrumFaceContainer = (props: DrumFaceContainerProps) => {
  const {
    instruments,
    selectBeatAction,
    setToggleIsPlaying,
    isPlaying,
    handleStartPlayback,
  } = props;
  return (
    <div css={appContainer}>
      <header css={appHeader}>
        <p>Drum machine</p>
        <TransportControls
          isPlaying={isPlaying}
          setToggleIsPlaying={setToggleIsPlaying}
          handleStartPlayback={handleStartPlayback}
        />
        <ChannelRack
          instruments={instruments}
          selectBeatAction={selectBeatAction}
        />
      </header>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(DrumFaceContainer);
