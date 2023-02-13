import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

//Se demora en cargar la appp ya que estamos trabajando de manera estatica
// y el backend está haciendo la peticion HTTP
export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray500.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Text color="white" h2>
          P
        </Text>
      </NextLink>

      <NextLink href="/" passHref>
        <Text color="white" h3>
          okémon
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};
