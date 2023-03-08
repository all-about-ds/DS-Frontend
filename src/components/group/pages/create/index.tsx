import Header from 'components/common/header';
import CenterAlignmentLayout from 'components/common/layout/align/center';
import ManageGroup from 'components/group/ui/manageGroup';
import React from 'react';

function CreateGroup() {
  return (
    <>
      <Header />
      <CenterAlignmentLayout>
        <ManageGroup groupType='create'></ManageGroup>
      </CenterAlignmentLayout>
    </>
  );
}

export default CreateGroup;
