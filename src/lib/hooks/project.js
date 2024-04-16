import { useQuery } from "@apollo/client";

import projects from "src/graphql/queries/projects";


export const useProjects = () => {
    const { data, loading, error } = useQuery(projects, {
        fetchPolicy: "cache-and-network",
    });

    return {
        loading,
        error,
        projects: data?.projects || [],
    }
};
