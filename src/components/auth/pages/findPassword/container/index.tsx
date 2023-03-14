import { findPasswordCurrentSectionAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import FindPasswordFirstSection from './sections/first';
import FindPasswordSecondSection from './sections/second';
import FindPasswordThirdSection from './sections/third';

function FindPasswordSectionContainer() {
  const [findPasswordCurrentSection, _] = useRecoilState(
    findPasswordCurrentSectionAtom
  );
  const sectionRendering = () => {
    const view: any[] = [];

    switch (findPasswordCurrentSection) {
      case 1:
        view.push(<FindPasswordFirstSection key={1} />);
        break;
      case 2:
        view.push(<FindPasswordSecondSection key={2} />);
        break;
      case 3:
        view.push(<FindPasswordThirdSection key={3} />);
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

export default FindPasswordSectionContainer;
