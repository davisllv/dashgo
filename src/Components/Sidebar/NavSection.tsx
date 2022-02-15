import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface INavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: INavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
