'use client';

import { MantineProvider } from "@mantine/core";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProviderRoot: FC<Props> = ({ children }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: 'monospace' }}>
    {children}
  </MantineProvider>
);

export default ProviderRoot;