import gs_logo from "../img/gs_logo.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export const Footer = () => {
  return (
    <footer
      className="card my-4 py-4 shadow"
      style={{
        width: "100%",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        borderRadius: "0",
      }}
    >
      <div className="container relative mx-auto px-5 pb-10 pt-12">
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-14">
            <div className="flex  space-x-3 md:-mt-10">
              <div>
                Built with React.js / Node.js & Express / Docker / Postgres &
                Redis DB, by Giorgio Savron
              </div>
              <div className="flex">
                <a
                  href="https://giorgiosavron.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img src={gs_logo} alt="GS_logo" width={20} height={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/giorgio-savron/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img src={linkedin} alt="linkedIn" width={20} height={20} />
                </a>
                <a
                  href="https://github.com/gsavr/fibonacci_docker_aws"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img src={github} alt="github" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
