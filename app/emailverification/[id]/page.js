import EmailVerification from './EmailVerification';

export const metadata = {
  title: 'Email Verification - Question Vault RMSTU',
};

export default async function EmailVerificationPage(props) {
  const params = await props.params;
  return <EmailVerification id={params.id} />;
}
