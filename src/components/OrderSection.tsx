const OrderSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16 mx-0 lg:mx-32">
      {/* Left Card - Commander */}
      <div className="bg-orange-500 rounded-3xl p-10 relative overflow-hidden">
        <h2 className="text-4xl font-bold text-white mb-1">Commander</h2>
        <h3 className="text-4xl font-bold text-white mb-8">
          en quelques seconds
        </h3>

        <div className="space-y-3 mb-8 relative z-10">
          <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center space-x-2 font-medium text-sm w-fit">
            <span>Commande Express</span>
          </button>
          {/* <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center space-x-2 font-medium text-sm w-fit">
                  <span>▶</span>
                  <span>Download on App Store</span>
                </button> */}
        </div>

        <p className="text-white text-sm relative z-10">
          Qreetus nec fringilla accumsan, risus sem
          <br />
          sollicitudin lacus, ut interdum tellus elit sed
          <br />
          risus.
        </p>

        {/* Image placeholder for decorative bottles */}
        <div className="absolute bottom-0 right-0 w-48 h-64">
          <img
            src="assets/drink.png"
            alt="Decorative"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Card - Image */}
      <div className="bg-gray-200 rounded-3xl overflow-hidden h-full min-h-[400px]">
        <img
          src="assets/img_commander.png"
          alt="Phone app preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default OrderSection;
