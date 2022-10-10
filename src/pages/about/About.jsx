import { useEffect } from "react";
import styled from "styled-components";
import useTitle from "../../helpers/useTitle";
import { StyledAbout } from "./About.styled";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout";

const About = () => {
  useTitle("ONLINEstore | About");

  useEffect(() => {
    window.scrollTo(0, -100);
  }, []);

  return (
    <StyledAbout>
      <div>
        <h1>ABOUT</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          est neque quo? Iste, officia nisi? Veritatis illum perferendis,
          aliquam explicabo alias, ullam, fugit sit incidunt rerum et dolore
          laborum aspernatur ratione similique dolores adipisci perspiciatis
          velit fugiat maiores consequatur labore praesentium! Unde molestiae
          eius rerum numquam obcaecati corporis eaque aliquam. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis ea omnis
          rerum quae praesentium aliquam architecto eligendi illum eum in
          nostrum nemo laudantium, harum mollitia natus voluptates maiores rem,
          at nisi. Quidem, qui accusantium asperiores quis, sapiente,
          reprehenderit expedita accusamus saepe reiciendis voluptas nostrum
          nobis veritatis neque necessitatibus dignissimos modi?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          provident voluptates et rerum in nostrum accusamus commodi aut vel
          tenetur nisi impedit ea rem cumque perferendis, illo fugiat error,
          ipsam molestiae neque nobis iure. Consequuntur quibusdam quae facilis
          sint earum pariatur, excepturi autem. Porro sequi ab animi eos vel.
          Natus, accusamus commodi voluptatem quae nemo animi quisquam excepturi
          deleniti aliquid illum laboriosam modi, architecto quibusdam vel, iure
          nihil cumque recusandae voluptate harum sit. Adipisci sint molestias
          quaerat reiciendis aliquam iure harum iste itaque neque corrupti. Ab
          recusandae sequi animi, fugiat ut debitis perferendis quia laudantium
          ipsa tempore est aperiam amet necessitatibus assumenda corrupti iure,
          illum sapiente quam delectus ipsum atque deserunt nostrum magni
          voluptate. Ipsam, maxime voluptatum. Quas doloribus recusandae
          deserunt facilis illum magnam magni explicabo, laboriosam ut odit
          corrupti harum voluptatem enim necessitatibus rerum voluptas
          dignissimos animi eum ea a assumenda atque ipsa illo! Repellendus
          suscipit modi magni. Eos.
        </p>
      </div>
      <FcAbout size={100} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          recusandae exercitationem perspiciatis vel, excepturi obcaecati? Iusto
          inventore iste possimus cupiditate facere incidunt tenetur qui minima?
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;
