import React from "react";
import video from "../../assets/nature-beautiful-short-video-720p-hd.mp4";

const FeatureVideo = () => {
  return (
    <div className="w-5/6 mx-auto my-20">
      <h1 className="text-3xl text-center font-bold mb-5">Features Video</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="card card-compact h-[540px] w-full bg-base-100 shadow-xl">
            <figure>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design</h2>
              <p>
                Security isn't just a technology problem it's about design, too.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product Updates</h2>
                <p>Traditional design won't save us in the COVID-19 era.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product Updates</h2>
                <p>New: Freehand Templates, built for the whole team.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product Updates</h2>
                <p>The 1 tool that helps remote teams collaborate better.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product Updates</h2>
                <p>A lifestyle you always being the focal point is innately unhealthy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureVideo;
