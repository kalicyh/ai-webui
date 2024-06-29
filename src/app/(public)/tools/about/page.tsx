"use client";

export default function About() {
  return (
    <>
<div className="flex flex-col items-center">
  <div className="flex justify-center">
    <div className="avatar online mt-4 mb-4">
      <div className="w-24 rounded-full">
        <img src="https://www.loliapi.com/acg/pp/" alt="Avatar" />
      </div>
    </div>
  </div>
  <div className="divider">OR</div>
  <div className="stats shadow mt-4">
    <div className="stat place-items-center">
      <div className="stat-title">工具界面</div>
      <div className="stat-value">31K</div>
      <div className="stat-desc">From January 1st to February 1st</div>
    </div>

    <div className="stat place-items-center mt-4">
      <div className="stat-title">Users</div>
      <div className="stat-value text-secondary">4,200</div>
      <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
    </div>

    <div className="stat place-items-center mt-4">
      <div className="stat-title">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
  </div>
</div>



    </>
  );
}
