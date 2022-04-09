import React from 'react';
import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

interface UsersTableProps {
    data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const rolesData = ['Manager', 'Collaborator', 'Contractor'];

export default function UsersInfo({ data }: UsersTableProps) {
    const rows = data.map((item) => (
        <tr key={item.name}>
            <td>
                <Group spacing="sm">
                    <Avatar size={40} src={item.avatar} radius={40} />
                    <div>
                        <Text size="sm" weight={500}>
                            {item.name}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {item.email}
                        </Text>
                    </div>
                </Group>
            </td>

            <td>
                <Text size="sm" weight={500} style={{ paddingLeft: 0, textAlign: 'start' }}>
                    {item.phone}
                </Text>
            </td>
            <td style={{ textAlign: 'start' }}>{Math.floor(Math.random() * 6 + 5)} days ago</td>
            <td style={{ textAlign: 'start' }}>
                {Math.random() > 0.5 ? (
                    <Badge fullWidth>Active</Badge>
                ) : (
                        <Badge color="gray" fullWidth>
                            Disabled
                        </Badge>
                    )}
            </td>
        </tr>
    ));

    return (
        <ScrollArea>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Phone Number</th>
                        <th>Last active</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}