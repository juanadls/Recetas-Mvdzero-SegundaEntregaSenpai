import React from "react";
import { FooterPage, FooterText, GroupOne, GroupTwo, GroupTwoSmall, SocialMediaAnchor, TitleHfour } from "../styled-components/footer-styled";

function FooterRecetas () {
    return (
        <div>
    <FooterPage >

    <GroupOne>

     <div class="box">

    <TitleHfour> Sobre Nosotros</TitleHfour>

    <FooterText>Lorem ipsum dolor sit amet consectetur !</FooterText>
    <FooterText>Lorem ipsum dolor sit amet consectetur!</FooterText>

  </div>

  <div class="box">

    <TitleHfour> Siguenos </TitleHfour>

    <div class="red-social">

      <SocialMediaAnchor> Facebook </SocialMediaAnchor>
      <SocialMediaAnchor> Instagram </SocialMediaAnchor>
    </div>
    </div>
    </GroupOne>

<GroupTwo>

  <GroupTwoSmall>&copy; 2021 <b> MV Zero</b> - Todos los derechos reservados.</GroupTwoSmall>

</GroupTwo>

</FooterPage>

</div>
)
}

export default FooterRecetas;