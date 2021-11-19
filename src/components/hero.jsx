export default function Hero(){
    return (
      <div>
        <div className="h-max w-full bg-black text-white flex flex-col-reverse items-center lg:flex-row justify-around">
          <div className="p-4 lg:flex flex-col gap-6"> 
            <h1 className="text-2xl xl:text-3xl mb-2 clearsans-bold">
              First Steps into Web3 and
              <br /> Financial Independence.
            </h1>
            <p className="text-md md:text-xl clearsans-thin">
              First Quests sets you on your greater Web3,
              <br /> Defi, and crypto adventure and will onboard
              <br /> you into the bankless Dao.
            </p>
          </div>
          <div>
            <img
              className="h-36"
              src="https://cdn.discordapp.com/attachments/910172830203785256/910173481688268860/Bankless_First_Quest_POAP.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-black gap-5 py-10 lg:flex-row justify-between px-24 xl:px-56 py-20">
          <div
            style={{ border: "1px solid #FFF" }}
            className="w-64 h-64 border-black bg-black text-white rounded-xl "
          >
            <div className="flex justify-between p-6 clearsans-bold text-2xl">
              <h1>Contribute</h1>
              <img
                src="https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png"
                alt=""
              />
            </div>
            <p className="text-sm px-6 clearsans-thin">
              Contribute to the fast growing Defi community.
            </p>

            <button className="text-black clearsans-regular text-2xl bg-red-600 rounded-xl px-6 mt-12 ml-4">
              GET INVOLVED
            </button>
          </div>

          <div
            style={{ border: "1px solid #FFF" }}
            className="w-64 h-64 border-black bg-black text-white rounded-xl"
          >
            <div className="flex justify-between clearsans-bold p-6 text-2xl">
              <h1>Make $Bank</h1>
              <img
                src="https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png"
                alt=""
              />
            </div>
            <p className="text-sm px-4 clearsans-thin">
              Get paid in crypto for contributing to DAO.
            </p>
            <button className="text-black clearsans-regular text-2xl bg-red-600 rounded-xl px-6 mt-12 ml-4">
              START EARNING
            </button>
          </div>
          <div
            style={{ border: "1px solid #FFF" }}
            className="w-64 h-64 border-black bg-black text-white rounded-xl"
          >
            <div className="flex justify-between p-6 clearsans-bold text-2xl">
              <h1>Community</h1>
              <img
                src="https://cdn.discordapp.com/attachments/868463273333366834/910542687239798834/9hZu47EYq40cbggIhxhgW0GM1eiuWwRkdjXbze5GRDjS8w6JtpkArV1QAAAABJRU5ErkJggg.png"
                alt=""
              />
            </div>
            <p className="text-sm px-4 clearsans-thin">
              Become part of the Bankless Community, everyone is welcome.
            </p>
            <button className="text-black clearsans-regular text-2xl bg-red-600 rounded-xl px-6 mt-12 ml-5">
              JOIN THE DAO
            </button>
          </div>
        </div>
        <div className="bg-black">
          <div class="w-max h-max bg-black flex flex-col items-center justify-between gap-y-0 p-4 md:flex-row xl:p-32 xl:mx-16">
            <div class="md:p-10 text-white flex flex-col gap-4">
              <h1 class="text-xl clearsans-bold lg:text-3xl">Bankless DAO</h1>
              <p class="text-md lg:text-lg clearsans-regular">
                is the premier educational leader for welcoming <br /> the
                uninitiated into the Defi fold.
              </p>
            </div>
            <div class="flex flex-row gap-2 items-center justify-center">
              <img
                src="https://cdn.discordapp.com/attachments/910172830203785256/910173349655748709/Header_DAO_Logo.png"
                alt=""
              />
              <h1 class="text-white text-3xl clearsans-bold">by</h1>
              <img
                class="w-2/4"
                src="https://cdn.discordapp.com/attachments/910172830203785256/910173347608932372/Header_Bankless_Logo2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
}