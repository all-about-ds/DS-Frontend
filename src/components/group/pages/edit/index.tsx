import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import ManageGroup from 'components/group/ui/manageGroup';

function EditGroup() {
  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <ManageGroup groupType='edit'></ManageGroup>
      </CenterAlignmentLayout>
    </>
  );
}

export default EditGroup;
//
