const Header = () => {
  return (
    <div className="md:pt-5 sm:pt-5">
      <div className="bg-custom-image bg-no-repeat bg-center w-full lg:bg-cover md:bg-cover sm:bg-cover  sm:h-38  md:h-38    lg:h-110 relative rounded-xmd ">
        <div className="absolute lg:bottom-1/4 md:bottom-1/4  sm:bottom-1/4 lg:p-20 w-110 md:p-10 sm:p-5 animate-smoothfade">
          <h1 className="lg:text-7xl font-bold md:text-4xl sm:text-xl sm:pl-5">
            ENJOY OUR DELICIOUS MEALS
          </h1>
          <p className="lg:text-xl pt-5 md:text-xsl sm:hidden lg:block md:bock">
            Craving something tasty? We've got you covered! At Blossom, we bring a world of flavours
            right to your home. Whether you're in the mood for a quick snack or a gourment meal our
            extensive meu has something for everyone
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
