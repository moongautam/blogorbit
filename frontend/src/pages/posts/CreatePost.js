import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Typography, Input, LoadingSpinner } from '../../components';
import API from '../../utils/axios';
import { showSuccess, showError } from '../../utils/toast';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const postData = {
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      imageUrl: imageUrl.trim()
    };

    try {
      await API.post('/posts', postData);
      showSuccess('Post published!');
      navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.msg || 'Failed to create post';
      showError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Typography variant="h1" className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Create New Post</span>
        </Typography>
        <Typography variant="body2" className="text-text-secondary">
          Share your thoughts with the world
        </Typography>
      </div>

      <Card className="create-post-form">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Typography variant="body1" className="font-medium force-black-text mb-2">
              Post Title
            </Typography>
            <Input
              type="text"
              placeholder="Enter an engaging title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-lg"
            />
          </div>

          <div>
            <Typography variant="body1" className="font-medium force-black-text mb-2">
              Featured Image URL (Optional)
            </Typography>
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Featured preview"
                aria-label="Preview of featured image"
                style={{
                  marginTop: '0.5rem',
                  maxWidth: '100%',
                  borderRadius: '6px',
                  border: '1px solid #ddd'
                }}
                onError={() => setImageUrl('')}
              />
            )}
          </div>

          <div>
            <Typography variant="body1" className="font-medium force-black-text mb-2">
              Content
            </Typography>
            <textarea
              aria-label="Post content"
              placeholder="Write your story here..."
              rows="12"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-textarea w-full resize-none"
            />
          </div>

          <div>
            <Typography variant="body1" className="font-medium force-black-text mb-2">
              Tags (Optional)
            </Typography>
            <Input
              type="text"
              placeholder="technology, design, programming (comma separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <Typography variant="caption" className="force-black-text mt-2 block">
              Separate tags with commas
            </Typography>
            <div className="flex gap-2 flex-wrap mt-2">
              {tags.split(',').map(tag => tag.trim()).filter(Boolean).map((tag, i) => (
                <span key={i} className="px-2 py-1 text-sm bg-primary/10 text-primary rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-border-color">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/dashboard')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="post-submit-btn"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <LoadingSpinner size="small" />
                  <span>Publishing...</span>
                </div>
              ) : (
                'Publish Post'
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default CreatePost;