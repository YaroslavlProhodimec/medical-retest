import { render, waitFor } from '@testing-library/react';
import { useFetchAllPostsQuery } from "../src/entities/post";
import { Posts } from "../src/widgets/posts/ui";
import { useFetchPostByIdQuery } from "../src/entities/post/api/post-api";
import { SelectedServicePage } from "../src/pages/selectedService /ui";

jest.mock("../src/entities/post");

describe("useFetchAllPostsQuery should fetch a post", () => {
  it("renders without errors", async () => {
    useFetchAllPostsQuery.mockReturnValue({
      data: [
        { id: 1, title: 'Post 1', description: 'Description 1', price: '10' },
        { id: 2, title: 'Post 2', description: 'Description 2', price: '20' },
      ],
    });

    const component = render(<Posts />);

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });


  it("renders without errors", async () => {


    useFetchPostByIdQuery.mockReturnValue({
      data: { id: 3, title: 'Post 1', description: 'Description 1', price: '10' },
    });
    const component = render(<SelectedServicePage />);

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });

  });
});
