import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
} from 'media-chrome/react';

function VideoCard() {
  return (
    <MediaController
      style={{
        height: '320px',
        width: '480px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {/* ✅ Use videoid instead of src */}
        <youtube-video
          slot="media"
          src="https://www.youtube.com/watch?v=8HTYXNLLLSQ"
          crossorigin
          muted
        ></youtube-video>

      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton />
        <MediaSeekForwardButton />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
      </MediaControlBar>
    </MediaController>
  );
}

export default VideoCard;