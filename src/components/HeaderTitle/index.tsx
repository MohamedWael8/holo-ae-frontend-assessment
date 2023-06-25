import {
  HeaderTitleContainer,
  HeaderTitleIcon,
  HeaderTitleTitlesContainer,
  HeaderTitleTitle,
  HeaderTitleSubtitle,
} from "./styles";

type HeaderTitleProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ icon, title, subtitle }) => (
  <HeaderTitleContainer>
    <HeaderTitleIcon src={icon} />
    <HeaderTitleTitlesContainer>
      <HeaderTitleTitle>{title}</HeaderTitleTitle>
      <HeaderTitleSubtitle>{subtitle}</HeaderTitleSubtitle>
    </HeaderTitleTitlesContainer>
  </HeaderTitleContainer>
);

export default HeaderTitle;
