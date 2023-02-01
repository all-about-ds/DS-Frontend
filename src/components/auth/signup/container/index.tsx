import { signupCurrentSectionAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import SignupFirstSection from './sections/first';
import SignupSecondSection from './sections/second';
import SignupThirdSection from './sections/third';

function SignupSectionContainer() {
  const [signupCurrentSection, _] = useRecoilState(signupCurrentSectionAtom);

  const sectionRendering = () => {
    const view: any[] = [];

    switch (signupCurrentSection) {
      case 1:
        view.push(<SignupFirstSection key={1} />);
        break;
      case 2:
        view.push(<SignupSecondSection key={2} />);
        break;
      case 3:
        view.push(<SignupThirdSection key={3} />);
        break;
    }

    return view;
  };
  return (
    <section>
      <>{sectionRendering()}</>
    </section>
  );
}

export default SignupSectionContainer;
