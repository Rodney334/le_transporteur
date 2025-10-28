const FaqSection = () => {
  return (
    <div className="bg-white rounded-3xl p-8 mb-8 mx-0 lg:mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQs Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">FAQs.</h2>
          <div className="space-y-3">
            <div className="bg-gray-900 text-white p-4 rounded-lg">
              <p className="font-medium">Morem ipsum dolor ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Porem ipsum dolor sit amet, consectetur ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Norem ipsum dolor sit amet ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Corem ipsum dolor sit amet ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Vorem ipsum dolor ?</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 bg-white text-orange-500 text-sm cursor-pointer hover:border-orange-300">
              <p>Qorem ipsum ?</p>
            </div>
          </div>
        </div>

        {/* Reps Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Reps.</h2>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed text-sm">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
