import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="text-center text-sm text-neutral-500 py-4">
          &copy; {new Date().getFullYear()} Social Limhu. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
