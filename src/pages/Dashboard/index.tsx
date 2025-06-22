import PageMeta from '../../components/common/PageMeta';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';

export default function Dashboard() {
  return (
    <>
      <PageMeta title="Dashboard" description="This is React TailAdmin" />
      <PageBreadcrumb pageTitle="Dashboard" />
    </>
  );
}
