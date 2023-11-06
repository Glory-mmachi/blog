
import "./BlogComponent.css";
import post1 from "../assets/latestPost1.svg";

export default function BlogComponent() {
  return (
    <div>
    <div className="blogComponent-container">
      <h2>Lorem ipsum dolor </h2>
      <p className="date">By Ixartz on April 24, 2022 - 5 min read</p>
      <img src={post1} alt="post" />

      {/* main */}
      <main>
        <h3>Lorem ipsum dolor </h3>
        <p>
          Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et
          neque error aut maxime nesciunt. Vel recusandae ducimus At dolorem
          iste id magni quam id corrupti officiis At minus minus et quidem
          rerum! 33 nihil quas aut consequatur asperiores est sunt illo et sunt
          commodi. <br /> <br />
          Non magni quisquam ex possimus ducimus id fuga dicta et obcaecati
          blanditiis sed quidem sint est molestiae ea quam corrupti. Nam itaque
          quae et ratione error vel possimus sunt! Qui cupiditate quae ut magnam
          veritatis vel nemo dolores id aspernatur deleniti sed itaque aut odio
          placeat.
        </p>

        <h3>Lorem ipsum dolor </h3>
        <p>
          Eum aperiam facilis aut deleniti ipsa At aspernatur nisi quo corporis
          assumenda non dolores rerum ad velit porro rem nulla reprehenderit.
          Non repudiandae harum ut harum laudantium et veritatis eaque et
          nesciunt voluptas ad aliquam aliquam non nemo voluptas. Sit molestiae
          doloribus At nemo repudiandae et reiciendis autem cum culpa optio ex
          ipsum eius et accusantium omnis At neque quaerat.
        </p>

        <ul>
          <li>Non magni quisquam</li>
          <li>Non magni quisquam</li>
          <li>Non magni quisquam</li>
          <li>Non magni quisquam</li>
        </ul>

        <h3>Lorem ipsum dolor </h3>
        <p>
          Eum aperiam facilis aut deleniti ipsa At aspernatur nisi quo corporis
          assumenda non dolores rerum ad velit porro rem nulla reprehenderit.
          Non repudiandae harum ut harum laudantium et veritatis eaque et
          nesciunt voluptas ad aliquam aliquam non nemo voluptas. Sit molestiae
          doloribus At nemo repudiandae et reiciendis autem cum culpa optio ex
          ipsum eius et accusantium omnis At neque quaerat.
        </p>

        <h3>Further Readings</h3>
        <ul className="down">
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor </li>
        </ul>
      </main>
    </div>
    </div>
  );
}
